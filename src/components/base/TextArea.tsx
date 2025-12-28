interface TextAreaProps {
    label: string
    placeholder: string
    value: string
    className?: string
    onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void
}

const TextArea = ({ label, placeholder, value, className, onChange }: TextAreaProps) => {
    return (
        <div className='flex flex-col gap-[5px]'>
            <div className='flex'>
                <h1 className="font-inter">{label}</h1>
            </div>
                <textarea
                    placeholder={placeholder}
                    value={value}
                    onChange={onChange}
                    className={`${className} max-md:p-[15px] rounded-[15px] border border-[#C9C9C9] font-inter px-[27px] py-[17px] w-full placeholder:text-[#C9C5C5] resize-none`}
                />
        </div>
    )
}

export default TextArea