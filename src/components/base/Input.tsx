interface InputProps {
    label: string
    placeholder: string
    value: string
    className?: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    required: boolean
    type?: string
}

const Input = ({ label, placeholder, value, className, onChange, required, type }: InputProps) => {
    return (
        <div className='flex flex-col gap-[5px]'>
            <div className='flex'>
                <h1 className="font-inter">{label} <span className='text-primary'>{required ? '*' : ''}</span></h1>
            </div>
            <input
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`${className} rounded-[15px] border border-[#C9C9C9] font-inter max-md:p-[15px] px-[27px] py-[17px] w-full placeholder:text-[#C9C5C5]`}
                type={type}
                required={required}
            />
        </div>
    )
}

export default Input