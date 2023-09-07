export function formatReadableTime(dateString) {
    const date = new Date(dateString);
    const hour = date.getHours();
    const minute = date.getMinutes();
    
    let period = 'am';
    let formattedHour = hour;
  
    // Convert to 12-hour format
    if (hour >= 12) {
      period = 'pm';
      formattedHour = hour === 12 ? 12 : hour - 12;
    }
  
    // Ensure single-digit hours have a leading zero
   // formattedHour = formattedHour.toString().padStart(2, '0');
  
    // Ensure single-digit minutes have a leading zero
    const formattedMinute = minute.toString().padStart(2, '0');
    
    if (formattedMinute != 0) {
        return `${formattedHour}.${formattedMinute}${period}`;
    } else {
        return `${formattedHour}${period}`;
    }
  }