import logo from '../assets/profil.png'

const Footer = ()=> {

    return(
        <footer className="pt-12 lg:pt-16 pb-10 bg-neutral-card text-white">
            <div className="flex flex-col gap-6 md:gap-0 md:flex-row justify-between pb-12 mb-6 border-b border-b-[#d9d9d9] w-[80%] mx-auto">
                {/* Logo Contact */}
                <div className="grid gap-8">
                    <span className='flex items-center gap-4'>
                        <img className="w-16 h-16 md:w-[4.5rem] md:h-[4.5rem] bg-gray-300 rounded-full" src={logo} alt="profil" />
                        <p className='text-2xl md:text-5xl font-bold'>Xanzu</p>
                    </span>
                    <p className='block'>Ada projek yang ingin anda kerjakan?</p>
                    <a className='inline-block font-extrabold text-sm py-3 px-5 border-2 border-transparent w-fit h-fit bg-primary text-white hover:bg-white hover:text-[#101010] transition-all ease-linear duration-200' href="https://api.whatsapp.com/send?phone=6281368449213&text=Hai%20Xanzu" target='_blank'>Ayo ngobrol</a>
                </div>
                {/* Footer Link */}
                <div className='grid grid-cols-2 justify-between gap-36'>
                    <div className='hidden lg:flex flex-col gap-4 text-sm '>
                        <p className='text-xl font-semibold mb-2'>Menu</p>
                        <a href="">Home</a>
                        <a href="">Tentang saya</a>
                        <a href="">Portofolio</a>
                    </div>
                    <div className='hidden lg:flex flex-col gap-4 text-sm'>
                        <p className='text-xl font-semibold mb-2'>Sosial Media</p>
                        <a href="https://github.com/xandoalka" target='_blank'>Github</a>
                        <a href="https://api.whatsapp.com/send?phone=6281368449213" target='_blank'>Whatsapp</a>
                        <a href="https://www.instagram.com/xandoalka" target='_blank'>Instagram</a>
                        <a href="https://discordapp.com/users/1177888929035333663" target='_blank'>Discord</a>
                        <a href="https://t.me/xandoalka" target='_blank'>Telegram</a>
                        <a href="https://www.youtube.com/@ken2next" target='_blank'>Youtube</a>
                    </div>
                </div>
                <div className='flex flex-col gap-8'>
                    <div className='grid grid-cols-3 gap-6'>
                        <a className='flex justify-center' href="https://www.youtube.com/@ken2next" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M27.4599 5.94658C28.7228 6.28463 29.7153 7.27706 30.0533 8.53993C30.6642 10.8266 30.6667 15.6004 30.6667 15.6004C30.6667 15.6004 30.6667 20.3742 30.0533 22.6609C29.7153 23.9238 28.7228 24.9162 27.4599 25.2542C25.1733 25.8675 16 25.8675 16 25.8675C16 25.8675 6.8267 25.8675 4.54001 25.2542C3.27715 24.9162 2.28472 23.9238 1.94667 22.6609C1.33334 20.3742 1.33334 15.6004 1.33334 15.6004C1.33334 15.6004 1.33334 10.8266 1.94667 8.53993C2.28472 7.27706 3.27715 6.28463 4.54001 5.94658C6.8267 5.33325 16 5.33325 16 5.33325C16 5.33325 25.1733 5.33325 27.4599 5.94658ZM20.6845 15.6008L13.0639 20.0003V11.2013L20.6845 15.6008Z" fill="white"/>
                            </svg>
                        </a>
                        <a className='flex justify-center' href="https://t.me/xandoalka" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M29.3334 16.0001C29.3334 23.3639 23.3638 29.3334 16 29.3334C8.63622 29.3334 2.66669 23.3639 2.66669 16.0001C2.66669 8.63628 8.63622 2.66675 16 2.66675C23.3638 2.66675 29.3334 8.63628 29.3334 16.0001ZM16.4778 12.51C15.1809 13.0494 12.589 14.1659 8.70211 15.8593C8.07093 16.1103 7.74029 16.3559 7.71019 16.596C7.65932 17.0018 8.16747 17.1615 8.85943 17.3791C8.95355 17.4087 9.05107 17.4394 9.15105 17.4719C9.83183 17.6932 10.7476 17.9521 11.2237 17.9623C11.6555 17.9717 12.1375 17.7936 12.6696 17.4282C16.3013 14.9768 18.176 13.7377 18.2937 13.7109C18.3767 13.6921 18.4918 13.6684 18.5697 13.7377C18.6477 13.807 18.64 13.9382 18.6318 13.9734C18.5814 14.188 16.5868 16.0424 15.5546 17.0021C15.2328 17.3012 15.0045 17.5134 14.9579 17.5619C14.8533 17.6705 14.7468 17.7732 14.6444 17.8719C14.012 18.4816 13.5377 18.9388 14.6707 19.6854C15.2152 20.0442 15.6508 20.3409 16.0855 20.6369C16.5602 20.9602 17.0337 21.2826 17.6462 21.6842C17.8023 21.7865 17.9514 21.8927 18.0965 21.9962C18.649 22.3901 19.1453 22.7439 19.7584 22.6875C20.1147 22.6547 20.4827 22.3197 20.6696 21.3205C21.1114 18.9591 21.9796 13.8428 22.1803 11.7345C22.1978 11.5498 22.1757 11.3134 22.158 11.2096C22.1402 11.1058 22.1031 10.958 21.9682 10.8485C21.8084 10.7189 21.5618 10.6916 21.4515 10.6934C20.95 10.7023 20.1806 10.9699 16.4778 12.51Z" fill="white"/>
                            </svg>
                        </a>
                        <a className='flex justify-center' href="https://github.com/xandoalka" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 2.66675C8.63335 2.66675 2.66669 8.63341 2.66669 16.0001C2.66669 21.9001 6.48335 26.8834 11.7834 28.6501C12.45 28.7667 12.7 28.3667 12.7 28.0167C12.7 27.7001 12.6834 26.6501 12.6834 25.5334C9.33335 26.1501 8.46669 24.7167 8.20002 23.9667C8.05002 23.5834 7.40002 22.4001 6.83335 22.0834C6.36669 21.8334 5.70002 21.2167 6.81669 21.2001C7.86669 21.1834 8.61669 22.1667 8.86669 22.5667C10.0667 24.5834 11.9834 24.0167 12.75 23.6667C12.8667 22.8001 13.2167 22.2167 13.6 21.8834C10.6334 21.5501 7.53335 20.4001 7.53335 15.3001C7.53335 13.8501 8.05002 12.6501 8.90002 11.7167C8.76669 11.3834 8.30002 10.0167 9.03335 8.18341C9.03335 8.18341 10.15 7.83342 12.7 9.55008C13.7667 9.25008 14.9 9.10008 16.0334 9.10008C17.1667 9.10008 18.3 9.25008 19.3667 9.55008C21.9167 7.81675 23.0334 8.18341 23.0334 8.18341C23.7667 10.0167 23.3 11.3834 23.1667 11.7167C24.0167 12.6501 24.5334 13.8334 24.5334 15.3001C24.5334 20.4167 21.4167 21.5501 18.45 21.8834C18.9334 22.3001 19.35 23.1001 19.35 24.3501C19.35 26.1334 19.3334 27.5667 19.3334 28.0167C19.3334 28.3667 19.5834 28.7834 20.25 28.6501C22.8969 27.7565 25.197 26.0554 26.8264 23.7861C28.4559 21.5169 29.3326 18.7938 29.3334 16.0001C29.3334 8.63341 23.3667 2.66675 16 2.66675Z" fill="white"/>
                            </svg>
                        </a>
                        <a className='flex justify-center' href="https://api.whatsapp.com/send?phone=6281368449213" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M2.66666 29.3334L4.54868 22.4923C3.39229 20.4853 2.78501 18.2092 2.78798 15.8929C2.77458 8.59407 8.70191 2.66675 15.9866 2.66675C19.5222 2.66675 22.8419 4.0375 25.3416 6.53794C26.5737 7.76363 27.5503 9.22163 28.2148 10.8275C28.8793 12.4333 29.2185 14.1551 29.2128 15.8929C29.2128 23.1776 23.2855 29.105 16 29.105C13.7824 29.105 11.6183 28.5535 9.68271 27.4923L2.66666 29.3334ZM9.99231 25.1132L10.3957 25.3551C12.0886 26.3568 14.0194 26.886 15.9866 26.8873C22.0352 26.8873 26.9684 21.955 26.9684 15.9055C26.9684 12.9758 25.8261 10.2075 23.7558 8.13794C22.7377 7.11412 21.5271 6.3019 20.1937 5.74809C18.8603 5.19429 17.4304 4.90985 15.9866 4.91116C9.92456 4.91195 4.993 9.8443 4.993 15.8937C4.993 17.9633 5.57124 19.9934 6.67335 21.7407L6.9286 22.1574L5.81309 26.2161L9.9931 25.114L9.99231 25.1132Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6936 10.3556C12.4518 9.80412 12.1832 9.79073 11.9547 9.79073C11.753 9.77733 11.5372 9.77733 11.3087 9.77733C11.0944 9.77733 10.7313 9.85769 10.4224 10.1941C10.1128 10.5297 9.26675 11.323 9.26675 12.949C9.26675 14.5758 10.4492 16.1482 10.6107 16.3633C10.7714 16.5783 12.8953 20.0186 16.256 21.35C19.0511 22.4521 19.6159 22.237 20.221 22.1693C20.8252 22.1023 22.17 21.3767 22.452 20.5968C22.7206 19.8311 22.7206 19.1591 22.6403 19.0244C22.5599 18.8905 22.3307 18.8093 22.0085 18.6344C21.6721 18.4737 20.0595 17.667 19.7507 17.5591C19.4411 17.452 19.226 17.3984 19.0109 17.7206C18.7959 18.057 18.164 18.7959 17.9632 19.011C17.7741 19.2261 17.5732 19.2529 17.2502 19.0914C16.9146 18.9307 15.8527 18.5809 14.5891 17.452C13.6075 16.5775 12.9489 15.4896 12.7472 15.1674C12.5597 14.831 12.7204 14.6561 12.8953 14.4946C13.0434 14.3473 13.2317 14.1054 13.3932 13.9172C13.5539 13.7281 13.6075 13.5808 13.7288 13.3657C13.8359 13.1506 13.7824 12.949 13.702 12.7883C13.6209 12.6402 12.9898 11.0134 12.6936 10.3548V10.3556Z" fill="white"/>
                            </svg>
                        </a>
                        <a className='flex justify-center' href="https://www.instagram.com/xandoalka" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 4C12.7408 4 12.3328 4.0136 11.0528 4.072C9.7752 4.1304 8.9024 4.3336 8.1392 4.6304C7.3392 4.9312 6.6136 5.4032 6.0136 6.0144C5.40338 6.61371 4.93109 7.3388 4.6296 8.1392C4.3344 8.9024 4.1304 9.776 4.072 11.0536C4.0144 12.3328 4 12.74 4 16C4 19.26 4.0136 19.6672 4.072 20.9472C4.1304 22.2248 4.3336 23.0976 4.6304 23.8608C4.9312 24.6608 5.4032 25.3864 6.0144 25.9864C6.61372 26.5966 7.33881 27.0689 8.1392 27.3704C8.9024 27.6664 9.7752 27.8696 11.0528 27.928C12.3328 27.9864 12.7408 28 16 28C19.2592 28 19.6672 27.9864 20.9472 27.928C22.2248 27.8696 23.0976 27.6664 23.8608 27.3696C24.6608 27.0688 25.3864 26.5968 25.9864 25.9856C26.5966 25.3863 27.0689 24.6612 27.3704 23.8608C27.6664 23.0976 27.8696 22.2248 27.928 20.9472C27.9864 19.6672 28 19.2592 28 16C28 12.7408 27.9864 12.3328 27.928 11.0528C27.8696 9.7752 27.6664 8.9024 27.3696 8.1392C27.0683 7.33845 26.596 6.61306 25.9856 6.0136C25.3863 5.40338 24.6612 4.93109 23.8608 4.6296C23.0976 4.3344 22.224 4.1304 20.9464 4.072C19.6672 4.0144 19.26 4 16 4ZM16 6.1624C19.204 6.1624 19.584 6.1744 20.8496 6.232C22.0192 6.2856 22.6544 6.48 23.0776 6.6456C23.6376 6.8624 24.0376 7.1232 24.4576 7.5424C24.8776 7.9624 25.1376 8.3624 25.3544 8.9224C25.5192 9.3456 25.7144 9.9808 25.768 11.1504C25.8256 12.416 25.8376 12.796 25.8376 16C25.8376 19.204 25.8256 19.584 25.768 20.8496C25.7144 22.0192 25.52 22.6544 25.3544 23.0776C25.1623 23.5988 24.8559 24.0704 24.4576 24.4576C24.0705 24.856 23.5989 25.1624 23.0776 25.3544C22.6544 25.5192 22.0192 25.7144 20.8496 25.768C19.584 25.8256 19.2048 25.8376 16 25.8376C12.7952 25.8376 12.416 25.8256 11.1504 25.768C9.9808 25.7144 9.3456 25.52 8.9224 25.3544C8.40116 25.1623 7.92961 24.8559 7.5424 24.4576C7.14414 24.0704 6.8377 23.5988 6.6456 23.0776C6.4808 22.6544 6.2856 22.0192 6.232 20.8496C6.1744 19.584 6.1624 19.204 6.1624 16C6.1624 12.796 6.1744 12.416 6.232 11.1504C6.2856 9.9808 6.48 9.3456 6.6456 8.9224C6.8624 8.3624 7.1232 7.9624 7.5424 7.5424C7.92955 7.14404 8.40113 6.83758 8.9224 6.6456C9.3456 6.4808 9.9808 6.2856 11.1504 6.232C12.416 6.1744 12.796 6.1624 16 6.1624Z" fill="white"/>
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 20.004C15.4742 20.004 14.9535 19.9004 14.4677 19.6992C13.9819 19.498 13.5405 19.203 13.1687 18.8312C12.7969 18.4594 12.502 18.018 12.3008 17.5322C12.0995 17.0464 11.996 16.5258 11.996 16C11.996 15.4742 12.0995 14.9535 12.3008 14.4677C12.502 13.9819 12.7969 13.5405 13.1687 13.1687C13.5405 12.7969 13.9819 12.502 14.4677 12.3007C14.9535 12.0995 15.4742 11.996 16 11.996C17.0619 11.996 18.0803 12.4178 18.8312 13.1687C19.5821 13.9196 20.004 14.938 20.004 16C20.004 17.0619 19.5821 18.0803 18.8312 18.8312C18.0803 19.5821 17.0619 20.004 16 20.004ZM16 9.83196C14.3641 9.83196 12.7953 10.4818 11.6385 11.6385C10.4818 12.7953 9.83197 14.3641 9.83197 16C9.83197 17.6358 10.4818 19.2047 11.6385 20.3614C12.7953 21.5181 14.3641 22.168 16 22.168C17.6358 22.168 19.2047 21.5181 20.3614 20.3614C21.5181 19.2047 22.168 17.6358 22.168 16C22.168 14.3641 21.5181 12.7953 20.3614 11.6385C19.2047 10.4818 17.6358 9.83196 16 9.83196ZM23.9624 9.71996C23.9624 10.1066 23.8088 10.4775 23.5353 10.7509C23.2619 11.0244 22.8911 11.178 22.5044 11.178C22.1177 11.178 21.7468 11.0244 21.4734 10.7509C21.2 10.4775 21.0464 10.1066 21.0464 9.71996C21.0464 9.33328 21.2 8.96243 21.4734 8.689C21.7468 8.41557 22.1177 8.26196 22.5044 8.26196C22.8911 8.26196 23.2619 8.41557 23.5353 8.689C23.8088 8.96243 23.9624 9.33328 23.9624 9.71996Z" fill="white"/>
                            </svg>
                        </a>
                        <a className='flex justify-center' href="https://discordapp.com/users/1177888929035333663" target='_blank'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                <path d="M25.1924 5.79199C23.3578 4.95289 21.4093 4.34133 19.3756 4C19.1195 4.44089 18.8351 5.03822 18.636 5.50755C16.4728 5.19466 14.3252 5.19466 12.1919 5.50755C11.9928 5.03822 11.6941 4.44089 11.4523 4C9.40435 4.34133 7.4559 4.95289 5.63404 5.79199C1.9505 11.2249 0.954938 16.5297 1.45272 21.7635C3.89893 23.5413 6.25984 24.6222 8.57948 25.3333C9.14837 24.5653 9.66038 23.7404 10.1013 22.8729C9.26216 22.56 8.46571 22.1759 7.69771 21.7208C7.89682 21.5787 8.09594 21.4222 8.28083 21.2658C12.9173 23.3849 17.9391 23.3849 22.5186 21.2658C22.7178 21.4222 22.9027 21.5787 23.1018 21.7208C22.3337 22.1759 21.5373 22.56 20.6982 22.8729C21.1391 23.7404 21.6511 24.5653 22.22 25.3333C24.5382 24.6222 26.9133 23.5413 29.3467 21.7635C29.9582 15.7049 28.3782 10.4427 25.1924 5.79199ZM10.7413 18.5351C9.34746 18.5351 8.20969 17.2693 8.20969 15.7191C8.20969 14.1689 9.31902 12.9031 10.7413 12.9031C12.1492 12.9031 13.3012 14.1689 13.2727 15.7191C13.2727 17.2693 12.1492 18.5351 10.7413 18.5351ZM20.0867 18.5351C18.6929 18.5351 17.5537 17.2693 17.5537 15.7191C17.5537 14.1689 18.6644 12.9031 20.0867 12.9031C21.4947 12.9031 22.6466 14.1689 22.6182 15.7191C22.6182 17.2693 21.5089 18.5351 20.0867 18.5351Z" fill="white"/>
                            </svg>
                        </a>
                    </div>
                    <a className='flex justify-center' href="mailto:xandoalka@gmail.com">xandoalka@gmail.com</a>
                </div>
            </div>
            <div className='grid place-items-center w-11/12 mx-auto text-center'>
                <p>Copyright 2023. Xanzu. All Rights Reserved.</p>
            </div>
        </footer>
    )
}

export default Footer