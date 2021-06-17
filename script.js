let nickName = prompt('Введите, пожалуйста, имя пользователя');
let urlNickName = 'https://api.github.com/users/' + nickName;

fetch(urlNickName)
	.then((res) => res.json())
	.then((json) => {
		console.log(json);
		let avatarURL = json.avatar_url;
		let name = json.name;
		let bio = json.bio;
		let userUrl = json.html_url;

		let imgUser = document.createElement('img');
		imgUser.src = avatarURL;
		imgUser.width = 200;
		document.body.append(imgUser);

		let br = document.createElement('br');
		document.body.append(br);

		let nameUser = document.createElement('a');
		nameUser.innerHTML = name;
		nameUser.href = userUrl;
		document.body.append(nameUser);

		let description = document.createElement('p');
		description.innerHTML = bio;
		document.body.append(description);
		})
	.catch((err) => {
		let p = document.createElement('p');
		p.innerHTML='"Информация о пользователе не доступна"';
		document.body.append(p);
	});
	