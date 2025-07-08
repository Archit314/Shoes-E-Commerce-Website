import schduler from 'node-schedule';
import axios from 'axios';

export const startPingScheduler = () => {

    schduler.scheduleJob('*/5 * * * * *', async () => {
        try {
            console.log('[Scheduler]: startPingScheduler Hitting ping route...');
            const res = await axios.get(`${process.env.API_URL}/ping`);
            console.log('[Scheduler]: startPingScheduler Response:', res.data);
        } catch (error) {
            console.error('[Scheduler]: startPingScheduler Failed to ping:', error.message);
        }
    })
}