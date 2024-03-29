import { useState } from "react";
import Image from "next/image"
import { Avatar } from "@/src/components/Avatar"
import { Button } from "@/src/components/Button";
import Dropdown from "@/src/components/Dropdown";
import Icon from "@/src/components/Icon";
import Bio from "./Bio";
import YoutubeImg from "@/src/assets/img/youtube.png";
import InstagramImg from "@/src/assets/img/instagram.png";
import styles from "./Profile.module.css"

interface ProfileProps {
    name: string,
    avatar: string,
    profileUrl: string,
    cateogries: string,
    bio?: string,
    youtube?: string,
    instagram?: string
}

const Profile: React.FC<ProfileProps> = (props) => {
    const [openMore, setOpenMore] = useState(false)

    return (
        <div className={styles["profile"]}>
            <div className={styles["more-dropdown"]}>
                <Dropdown
                    className={styles["dropdown"]}
                    trigger={
                        <div className={styles["trigger"]} onClick={() => setOpenMore(true)}>
                            <Icon icon="more" className={styles["more-icon"]} />
                        </div>
                    }
                    menu={[
                        { id: 0, element: <span className={styles["menu"]} onClick={() => setOpenMore(false)}>Copy link</span> },
                        { id: 1, element: <span className={styles["menu"]} onClick={() => setOpenMore(false)}>Cancel</span> }
                    ]}
                />
            </div>
            <div className={styles["avatar-social"]}>
                <div><Avatar.CreatorAvatar size="sm" src={props.avatar} /></div>
                <div className="flex">
                    <div className={styles["social-icon"]}>
                        <Image alt="YoutubeImg" src={YoutubeImg} />
                    </div>
                    <div className={styles["social-icon"]}>
                        <Image alt="IgImg" src={InstagramImg} />
                    </div>
                </div>
            </div>
            <div className={styles["name-category"]}>
                <div>
                    <div className={styles["name"]}><span>{props.name}</span></div>
                    <div className={styles["category"]}><span>{props.cateogries}</span></div>
                </div>
                <div>
                    <Button.PrimaryButton rounded="true" value="Subscribe" />
                </div>
            </div>
            <Bio bio={props.bio} />
            <div className={styles["edit-btn"]}>
                <Button.PrimaryButton value="Edit Profile" width="290px"><Icon icon="edit" /></Button.PrimaryButton>
            </div>
        </div>
    )
}

export default Profile