import React from 'react'
import { IoLogoYoutube } from 'react-icons/io'
import { BsInstagram } from 'react-icons/bs'
import { SlSocialVkontakte } from 'react-icons/sl'

export default function Footer() {
    function youtubeHandler() {
        const youtube = 'https://www.youtube.com/@break1994a'
        window.open(youtube)
    }
    function instagramHandler() {
        const instagram = 'https://instagram.com/danyajosko?igshid=YmMyMTA2M2Y='
        window.open(instagram)
    }
    function vkontakteHandler() {
        const vkontakte = 'https://vk.com/miracledanya'
        window.open(vkontakte)
    }
    return (
        <footer>
            <div className='container'>
                <div className='footer_logo'></div>
            </div>
            <div className='footer_info'>
                <a href="#" onClick={youtubeHandler}>
                    <IoLogoYoutube />
                </a>
                <a href="#" onClick={instagramHandler}>
                    <BsInstagram />
                </a>
                <a href="#" onClick={vkontakteHandler}>
                    <SlSocialVkontakte />
                </a>
            </div>
        </footer>
    )
}
