// api.js (utility for API requests)
const API_BASE_URL = "http://localhost:9090";

export const fetchDonorData = async (donorid) => {
  const res = await fetch(`${API_BASE_URL}/patient/${donorid}`);
  return await res.json();
};


export const saveDonor = (data) => {
  return fetch(`${API_BASE_URL}/save-patient`, {
    method: "POST",
    headers: { "Content-type": "application/json" },
    body: JSON.stringify({
      name: data.name,
      bloodGroup: data.bloodgroup,
    }),
  });
};

export const fetchAllDonors = async () => {
  const res = await fetch(`${API_BASE_URL}/patient/all`);
  return await res.json();
};

export const getDonor = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/patient/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch donor data');
    }
    const donorData = await response.json();
    return donorData;
  } catch (error) {
    throw error;
  }
};

export const updateDonor = async (id, updatedData) => {
  try {
    const response = await fetch(`${API_BASE_URL}/update-patient/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedData),
    });
    if (!response.ok) {
      throw new Error('Failed to update donor data');
    }
  } catch (error) {
    throw error;
  }
};
