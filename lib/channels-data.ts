const fetchChannels = async () => {
    try {
        const url = `https://www.codeminer.in/tvchanel/admin/api/channel_list.php?ts=${Date.now()}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.data;
      
    } catch (error) {
      console.error('Failed to load channels:', error);
    } finally {
    //   setLoading(false);
    }
  };
  const categories = async () => {
    try {
        const url = `https://www.codeminer.in/tvchanel/admin/api/cat_list.php?ts=${Date.now()}`;
        const response = await fetch(url);
        const data = await response.json();
        return data.data;
      
        console.log(data.data);
    } catch (error) {
      console.error('Failed to load channels:', error);
    } finally {
    //   setLoading(false);
    }
  };

  export default {fetchChannels, categories};