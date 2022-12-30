import { ArrowLeft } from "framework7-icons/react"
import { Button, Icon, Navbar } from "konsta/react"
import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom"

export const HeaderPages = ({title}) => {

    const navigate = useNavigate();
    
    return(
        <Navbar className="top-0 sticky" titleClassName="header-page"
            title={
                <h2 className="title-header-navbar">{title}</h2>
            }
            left={
                <Button small rounded clear onClick={()=>navigate(-1)} className="button-navbar">
                    <Icon 
                        material={ <ArrowLeft className="w-6 h-6" style={{color: '#000'}} /> }
                        ios={ <ArrowLeft className="w-6 h-6" style={{color: '#000'}} /> }
                    />
                </Button>
            }
        />
    )
}