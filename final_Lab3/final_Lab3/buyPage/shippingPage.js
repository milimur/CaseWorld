async function loadProfileData() {
    try {
        const response = await fetch('./../userPage/registro/thing.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        console.log('Fetched Data:', data);

        const profileData = data[0];

        console.log(profileData)

        if (profileData.email) {
            document.getElementById('email').value = profileData.email;
        } else {
            console.warn('Email not found in data');
        }

        if (profileData.phone) {
            document.getElementById('phone').value = profileData.phone;
        } else {
            console.warn('Phone not found in data');
        }
    } catch (error) {
        console.error('Error loading profile data:', error);
    }
}

window.onload = loadProfileData();