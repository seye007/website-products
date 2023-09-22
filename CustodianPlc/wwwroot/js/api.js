export async function postAsync(url, data, headers = {}) {
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        ...headers,
      },
      body: data,
    });

    if (response.status === 200) {
      const responseData = await response.json();
      return responseData;
    } else {
      console.error('HTTP Error:', response.statusText);
      throw new Error(response.statusText);
    }
  } catch (error) {
    console.error('Request Error:', error);
    throw error;
  }
}