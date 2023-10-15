import axios from 'axios';

const fetchMode = async () => {
  try {
    const response = await axios.get('https://60816d9073292b0017cdd833.mockapi.io/modes');
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export default fetchMode;
