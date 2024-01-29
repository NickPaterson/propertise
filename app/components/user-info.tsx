import { Profile } from '@prisma/client';

interface props {
    profile: Profile;
}
export function UserInfo({ profile }: props) {
    return (
        <div>
            <h1>User Info</h1>
            <p>Name: {profile.firstName} {profile.lastName}</p>
        </div>
    );
}
