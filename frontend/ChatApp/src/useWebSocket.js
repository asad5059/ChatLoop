import { useEffect, useRef, useState, useCallback } from 'react';

const WS_URL = import.meta.env.VITE_BACKEND_WS_URL; // ws://localhost:8000/ws/chat/

export function useWebSocket(url = WS_URL) {
  const [messages, setMessages] = useState([]);
  const [connectionState, setConnectionState] = useState('CLOSED');
  const ws = useRef(null);

  useEffect(() => {
    ws.current = new window.WebSocket(url);
    setConnectionState('CONNECTING');

    ws.current.onopen = () => setConnectionState('OPEN');
    
    ws.current.onclose = () => setConnectionState('CLOSED');
    
    ws.current.onerror = () => setConnectionState('ERROR');

    ws.current.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        setMessages((prev) => [...prev, data]);
      } catch {
        setMessages((prev) => [...prev, { type: 'raw', message: event.data }]);
      }
    };
    
    return () => {
      ws.current && ws.current.close();
    };
    // Only re-run if url changes
  }, [url]);

  const sendMessage = useCallback((msg) => {
    if (ws.current && ws.current.readyState === 1) {
      ws.current.send(JSON.stringify({ message: msg }));
    }
  }, []);

  return [messages, sendMessage, connectionState];
} 