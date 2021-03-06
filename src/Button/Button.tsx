import { css } from '@emotion/react';
import { radiusStyle } from '../common/styles/styles';
import { RadiusProps } from '../common/types/types';

interface ButtonProps extends RadiusProps {
	/** 버튼 안의 내용 */
	children: React.ReactNode;
	/** 버튼 테마 */
	theme?: 'primary' | 'secondary' | 'tertiary';
	/** 버튼 사이즈 */
	size?: 'small' | 'medium' | 'large';
	/** 클릭했을 때 호출할 함수 */
	onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
	/** 버튼을 비활성화 */
	disabled?: boolean;
}

const style = css`
	cursor: pointer;
	outline: none;
	border: none;
	box-sizing: border-box;
	height: 2rem;
	font-size: 0.875rem;
	padding: 0.5rem 1rem;
	background: #20c997;
	color: white;
	border-radius: 0.25rem;
	line-height: 1;
	font-weight: 600;
	&:focus {
		box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.2);
	}
	&:hover {
		background: #38d9a9;
	}
	&:active {
		background: #12b886;
	}
	&:disabled {
		cursor: not-allowed;
		opacity: 0.6;
	}
`;

const themes = {
	primary: css`
		background: #20c997;
		color: white;
		&:hover {
			background: #38d9a9;
		}
		&:active {
			background: #12b886;
		}
	`,
	secondary: css`
		background: #e9ecef;
		color: #343a40;
		&:hover {
			background: #f1f3f5;
		}
		&:active {
			background: #dee2e6;
		}
	`,
	tertiary: css`
		background: none;
		color: #20c997;
		&:hover {
			background: #e6fcf5;
		}
		&:active {
			background: #c3fae8;
		}
	`,
};

const sizes = {
	small: css`
		height: 1.75rem;
		font-size: 0.75rem;
		padding: 0 0.875rem;
	`,
	medium: css`
		height: 2.5rem;
		font-size: 1rem;
		padding: 0 1rem;
	`,
	large: css`
		height: 3rem;
		font-size: 1.125rem;
		padding: 0 1.5rem;
	`,
};

/** 버튼 컴포넌트 입니다. */
const Button = ({
	children,
	theme = 'primary',
	size = 'medium',
	disabled,
	onClick,
	radiusType = 'default',
	radiusSize = 'sm',
}: ButtonProps) => (
	<button
		type="button"
		css={[
			style,
			themes[theme],
			sizes[size],
			radiusStyle[radiusType][radiusSize],
		]}
		disabled={disabled}
		onClick={onClick}
	>
		{children}
	</button>
);

export default Button;
