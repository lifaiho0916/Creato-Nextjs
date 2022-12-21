export type IBaseButtonProps = React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>;

function BaseButton({ className, children, ...props }: IBaseButtonProps) {
    return <button className={`${props.value ? 'containerBtn' : 'btn-icon'} ${className} w-[330px]`}{...props}>{children}</button>
}

export default BaseButton