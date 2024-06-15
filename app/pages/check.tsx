import * as S from "../stylesheets/check";

function Check() {
    return(
        <S.form>
            <S.studentlist>
                <S.student />
                <S.student />
                <S.student />
                <S.student />
            </S.studentlist>
            <S.tab />
        </S.form>
    );
}

export default Check;