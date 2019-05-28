const form = document.getElementById('subscribeForm');
const message = document.getElementById('message');

form.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    subscribe(email);
});

function subscribe(email) {
    const callSubscribe = async () => await (
        await fetch(LAMBDA_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify({ email: email }),
            headers: new Headers({
                'Content-Type': 'application/json'
            })
        })).json();

    callSubscribe().then(data => {
        message.innerText = data.message;
        message.classList.remove("d-none");
        setTimeout(() => {
            message.classList.add("d-none");
        }, 5000);
    });
}