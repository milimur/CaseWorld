async function loadProfileData() {
    try {
        const response = await fetch('../registro/thing.json');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        console.log('Fetched Data:', data);

        const profileData = data[0];
        console.log(profileData)

        if (profileData.dni) {
            document.getElementById('dni').placeholder = profileData.dni;
        } else {
            console.warn('DNI not found in data');
        }

        if (profileData.email) {
            document.getElementById('email').placeholder = profileData.email;
        } else {
            console.warn('Email not found in data');
        }

        if (profileData.phone) {
            document.getElementById('mobile').placeholder = profileData.phone;
        } else {
            console.warn('Phone not found in data');
        }
    } catch (error) {
        console.error('Error loading profile data:', error);
    }
}

window.onload = loadProfileData;