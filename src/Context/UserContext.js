import React, { createContext, useContext, useState } from "react";

export let UserContext = createContext();
export const useUserContext = () => useContext(UserContext);

export let UserProvider = ({ children }) => {
	const userStoraged = localStorage.user_name;
	const [userLogged, setUserLogged] = useState(userStoraged);

	const userThumbnailStoraged = localStorage.user_thumbnail;
	const [userThumbnail, setUserThumbnail] = useState(userThumbnailStoraged);

	const userEmailStoraged = localStorage.user_email;
	const [userEmail, setUserEmail] = useState(userEmailStoraged);

	const responseGoogle = (response) => {
		const infoLog = response.profileObj;

		setUserLogged(infoLog.name);
		localStorage.setItem("user_name", `${infoLog.name}`);

		setUserThumbnail(infoLog.imageUrl);
		localStorage.setItem("user_thumbnail", `${infoLog.imageUrl}`);

		setUserEmail(infoLog.email);
		localStorage.setItem("user_emial", `${infoLog.email}`);
	};

	const logOut = () => {
		localStorage.clear();
		setUserLogged();
		setUserThumbnail();
		setUserEmail();
	};

	return (
		<UserContext.Provider
			value={{ responseGoogle, userLogged, userThumbnail, userEmail, logOut }}
		>
			{children}
		</UserContext.Provider>
	);
};
