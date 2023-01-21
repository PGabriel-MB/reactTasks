import style from "styled-components";

export const Card = style.div`
	padding: 5em;
	background-color: var(--white);
	border-radius: 20px;
	box-shadow: 0px 11px 12px 5px rgba(0, 0, 0, 0.25);
	display: flex;
	justify-content: center;
	flex-direction: column;
	width: 460px;

	@media (max-width: 420px) {
		max-width: 400px;
		margin: 5px;
		padding: 50px 50px;

		> input {
			font-size: 14px;
			padding: 10px;
		}
	}

	@media (max-width: 300px) {
		width: 100%;
		margin: 5px;
		padding: 30px;

		> div {
			> button {
				padding: 10px 1em;
			}
		}
	}
`

export const Input = style.input`
	background-color: var(--green-clean);
	padding: 21px 1em;
	margin: 1em 0;
	border-radius: 10px;
	border: 1px solid var(--green-dark);
	color: var(--green-dark);
	font-size: 21px;
	font-weight: 900;
	::placeholder {
		color: #ffffff
	};
`;

export const ButtonRow = style.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	margin: 1em 0;
`;

export const Button = style.button`
	padding: 1em;
	border-radius: 10px;
	font-size: 1em;
	width: 40%;
	border: none;
	font-weight: 900;
`;	
