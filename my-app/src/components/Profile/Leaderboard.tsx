import {
    getKilometersLeaderboard,
    getMinutesLeaderboard,
    getViolationsLeaderboard,
    Order,
    UserResponse
} from "../../backend";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export enum LeaderboardType {
    Kilometers = "Kilometers",
    Minutes = "Minutes",
    Violations = "Violations",
}

interface UserLeaderboardProps {
    leaderboardType: LeaderboardType;
}

const Leaderboard = ({ leaderboardType }: UserLeaderboardProps) => {
    const accessToken = localStorage.getItem("access") as string;
    const [page, setPage] = useState(1);
    const [order, setOrder] = useState(Order.Descending);
    const [leaderboardData, setLeaderboardData] = useState<
        { data: UserResponse[], showProperty: "km_driven" | "minutes_driven" } |
        { data: (UserResponse & { violations: number })[], showProperty: "violations" }
    >({ data: [], showProperty: "km_driven" });

    function fetchLeaderboard() {
        switch(leaderboardType) {
            case LeaderboardType.Kilometers:
                getKilometersLeaderboard(page, order, accessToken).then(users => setLeaderboardData({
                    data: users,
                    showProperty: "km_driven",
                }));
                break;
            case LeaderboardType.Minutes:
                getMinutesLeaderboard(page, order, accessToken).then(users => setLeaderboardData({
                    data: users,
                    showProperty: "minutes_driven",
                }));
                break;
            case LeaderboardType.Violations:
                getViolationsLeaderboard(page, order, accessToken).then(users => setLeaderboardData({
                    data: users,
                    showProperty: "violations",
                }));
                break;
        }
    }

    async function previousPageHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        setPage(page - 1);
        await fetchLeaderboard();
    }

    async function nextPageHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        setPage(page + 1);
        await fetchLeaderboard();
    }

    useEffect(() => {
        fetchLeaderboard();
    }, []);

    return (
        <div className="mb-10">
            <h2 className="text-xl font-bold mb-3">{leaderboardType} leaderboard</h2>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th className="text-left">Username</th>
                        <th>{leaderboardType}</th>
                    </tr>
                </thead>
                <tbody>
                    {leaderboardData.showProperty === "violations" ?
                        leaderboardData.data.map((user, index) => (
                            <tr className="border-b text-left">
                                <td className="px-6 py-2">{index + 1}</td>
                                <td className="text-left px-4"><Link to={`/profile/${user.username}`}>{user.username}</Link></td>
                                <td className="px-4">{user[leaderboardData.showProperty]}</td>
                            </tr>)) :
                        leaderboardData.data.map((user, index) => (
                            <tr className="border-b">
                                <td className="px-6 py-2">{index + 1}</td>
                                <td className="text-left py-4"><Link to={`/profile/${user.username}`}>{user.username}</Link></td>
                                <td className="px-4">{user[leaderboardData.showProperty]}</td>
                            </tr>))
                    }
                </tbody>
            </table>
            <div className="mt-4">
                <button className={
                    (page === 1 ?
                        "disabled:opacity-50" :
                        "font-medium text-blue-600 dark:text-blue-500 hover:underline") +
                    " mr-4"
                }
                    disabled={page === 1}
                    onClick={event => previousPageHandler(event)}>
                    Previous page
                </button>
                <button className={
                    (leaderboardData.data.length < 20 ?
                        "disabled:opacity-50" :
                        "font-medium text-blue-600 dark:text-blue-500 hover:underline") +
                    " mr-4"
                }
                    disabled={leaderboardData.data.length < 20}
                    onClick={event => nextPageHandler(event)}>
                    Next page
                </button>
            </div>
        </div>
    )
};

export default Leaderboard;