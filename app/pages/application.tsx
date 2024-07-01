import axios from 'axios';
import styled from 'styled-components';
import React, { useState, useEffect } from 'react';



// 신청 페이지
export default function Application(): JSX.Element{
    // 페이지 내부 분할 변수
    const [page, setPage] = useState(0);

    // 페이지 JSX요소 변수
    const [ELEMENT, setELEMENT] = useState(<></>);

    // 신청 페이지 내부 분할
    switch(page){

        // 맨 처음 3개 선택지
        case(0):{
            setELEMENT(<>
                
            </>);
            break;
        }

        // 1번 선택지
        case(1):{
            setELEMENT(<>
            
            </>);
            break;
        }

        // 2번 선택지
        case(2):{
            setELEMENT(<>
            
            </>);
            break;
        }

        // 3번 선택지
        case(3):{
            setELEMENT(<>
            
            </>);
            break;
        }

        // 선택지 오류
        default:{
            console.error("error: 9와1/4선택지로 인하여 마법부에서 페이지를 삭제하였습니다.");
        }
    }

    return(
        ELEMENT
    );
}