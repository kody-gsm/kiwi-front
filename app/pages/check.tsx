import * as S from "../stylesheets/check";
import User from "../component/User";
import Filter from "../component/Filter";

function Check() {
    return (
        <S.main>
            <Filter />
            <S.container>
                <User />
                <User />
                <User />
                <User />
            </S.container>
        </S.main>
    );
}

export default Check;
