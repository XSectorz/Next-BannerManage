
'use client'
import Publish from '@/components/components/manages/publish';
import BannerPanel from '@/components/components/manages/banner-panel';
import BannerPreview from '@/components/components/manages/banner-preview';
import { useState } from 'react';

const ManageBanner = () => {

    const [currentMode, setCurrentMode] = useState<string>('');

    return (
        <>
            <div className='flex flex-col w-full h-full'>
                <div className='flex flex-row w-full h-full'>
                    <div className='flex w-full justify-between items-center'>
                        <div className='flex font-nunito text-md'>
                            Banner / All Banner 
                        </div>
                        <div className='flex' style={{ 
                            width: "40%"
                        }}>
                            <Publish />
                        </div>
                    </div>
                </div>
                <div className='flex flex-row w-full h-full mt-2'>
                    <div className='flex items-center w-3/5 h-full justify-center'>
                        <div className='flex mx-11 w-3/5 justify-center items-center'>
                        <BannerPreview currentMode={currentMode} setCurrentMode={setCurrentMode}/>
                        </div>
                    </div>
                    <div className={`flex flex-col w-full h-full ${currentMode === "" ? 'hidden' : ''}`}>
                        <BannerPanel currentMode={currentMode} setCurrentMode={setCurrentMode}/>
                    </div>
                </div>
            </div>
        </>
    )

}

export default ManageBanner;