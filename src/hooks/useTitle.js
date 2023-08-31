import { useEffect } from "react";

export default function useTitle(title) {

    useEffect(() => {
        document.title = `${title}/LogaXp App`;
      });
    
  return null;
}
