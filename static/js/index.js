const submitBtn = document.getElementById('submit-btn');
const textarea = document.querySelector('textarea');
const output = document.querySelector('.output');

function processInputData(text) {
    return text.split('\n').filter((el) => {
        return el !== '';
    });
}

function setLoading(isLoading) {
    if (isLoading) {
        submitBtn.setAttribute('disabled', 'true');
        submitBtn.innerText = 'Loading...';
    }
    if (!isLoading) {
        submitBtn.removeAttribute('disabled');
        submitBtn.innerText = 'Submit';
    }
}

function showResults(data) {
    output.innerText = '';
    for (let i = 0; i < data.length; i++) {
        output.innerText += data[i] + '\n';
    }
}

async function handleSubmit(data) {
    setLoading(true);
    try {
        const res = await fetch('/sort/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        });

        if (res.status === 200) {
            const data = await res.json();
            setLoading(false);
            showResults(data);
            return;
        }

        if (res.status === 400) {
            const data = await res.json();
            alert(data.message);
            setLoading(false);
            return;
        }

        if (res.status > 400 && res.status < 600) {
            alert('Something went wrong!');
            setLoading(false);
        }
    } catch (e) {
        alert('Something went wrong!');
        setLoading(false);
    }
}

submitBtn.addEventListener('click', function (e) {
    e.preventDefault();
    handleSubmit(processInputData(textarea.value));
});
