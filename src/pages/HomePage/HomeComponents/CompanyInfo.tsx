import React from 'react'
import '../../../styles/companyInfo.scss'

function CompanyInfo() {
    return (
        <>
            <div className='companyInfoWrapper'>
                <div className='companyInfoWrapper__left'>
                    <div className='companyInfoWrapper__left__speed'>
                        <div className='companyInfoWrapper__left__speed__header'>
                            <p>Скорость</p>
                            <p>01</p>
                        </div>
                        <div className='companyInfoWrapper__left__speed__content'>
                            <p>Наша команда профессионалов ежедневно улучшает создаваемый продукт, вкладывая накопленные знания и энергию. Большой опыт, технологичность проектирования, высокая организация и оптимизация процессов производства позволяют нам строить быстро и сдавать дома в срок или раньше. </p>
                        </div>
                    </div>
                    <div className='companyInfoWrapper__left__technologies'>
                        <div className='companyInfoWrapper__left__technologies__header'>
                            <p>Технологии</p>
                            <p>03</p>
                        </div>
                        <div className='companyInfoWrapper__left__technologies__content'>
                            <p>Мы используем как классические, так и новые технологии, отвечающие параметрам долговечности и энергоэффективности, которые появляются на рынке. Внедряем BIM-проектирование, цифровизацию инженерных систем и управление домами при помощи мобильного приложения.</p>
                        </div>
                    </div>
                </div>


                <div className='companyInfoWrapper__middle'>
                    <div className='companyInfoWrapper__middle__one'>
                        <div className='companyInfoWrapper__middle__one__two'>
                            <div className='companyInfoWrapper__middle__one__two__three'><p>Почему <br/>мы?</p></div>
                        </div>
                    </div>
                </div>


                <div className='companyInfoWrapper__right'>
                    <div className='companyInfoWrapper__right__quality'>
                        <div className='companyInfoWrapper__right__quality__header'>
                            <p>Качество</p>
                            <p>02</p>
                        </div>
                        <div className='companyInfoWrapper__right__quality__content'>
                            <p>Мы привлекаем проверенных подрядчиков, которые поддерживают наши принципы, стандарты и культуру производства, чтобы строить объекты, соответствующие ожиданиям покупателей. Мы никогда не экономим в ущерб комфорту будущих новосёлов и сохраняем сбалансированную цену продукта высокого качества</p>
                        </div>
                    </div>
                    <div className='companyInfoWrapper__right__architecture'>
                        <div className='companyInfoWrapper__right__architecture__header'>
                            <p>Архитектура</p>
                            <p>04</p>
                        </div>
                        <div className='companyInfoWrapper__right__architecture__content'>
                            <p>В создании жилья нет малозначительных деталей — они формируют архитектуру жизни. Мы находим точки развития, строим эстетичную современную городскую среду и работаем по единым стандартам качества объектов для комфорта наших клиентов.</p>
                        </div>
                    </div>

                </div>
            </div>
            <div className='ps'>
                <p>СКАТ работает по ипотечным программам со всеми крупнейшими банками страны. Исполнение обязательств застройщика и надежность покупки недвижимости по 214 ФЗ гарантируется системно значимым для России банком Raiffeisen.</p>
            </div>
        </>

    )
}

export default CompanyInfo