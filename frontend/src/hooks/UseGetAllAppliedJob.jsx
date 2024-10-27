import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { APPLICATION_API_END_POINT } from '@/utils/constant';
import { setAllAdminJobs } from '@/redux/jobSlice';


export const useGetAllAppliedJob = () => {
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchAllAppliedJobs = async () => {
            try {
                const res = await axios.get(`${APPLICATION_API_END_POINT}/get`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setAllAdminJobs(res.data.application)) 
                }
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchAllAppliedJobs();
    },[]);

}

export default useGetAllAppliedJob;
