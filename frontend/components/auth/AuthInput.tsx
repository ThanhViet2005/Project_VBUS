import React from 'react';

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
    icon?: React.ReactNode;
    rightElement?: React.ReactNode;
}

const AuthInput = ({ label, icon, rightElement, ...props }: AuthInputProps) => {
    return (
        <div className="mb-4 lg:mb-5">
            <div className="flex justify-between items-center mb-1">
                <label className="text-xs lg:text-sm font-semibold text-gray-700">{label}</label>
                {rightElement}
            </div>
            <div className="relative group">
                {icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-500 transition-colors">
                        {icon}
                    </div>
                )}
                <input
                    {...props}
                    className={`w-full bg-gray-50 border border-transparent focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100 transition-all rounded-xl py-2.5 lg:py-3.5 pr-4 ${icon ? 'pl-11' : 'pl-4'} outline-none text-sm lg:text-base text-gray-900 placeholder:text-gray-300`}
                />
            </div>
        </div>
    );
};

export default AuthInput;
