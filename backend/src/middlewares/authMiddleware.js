import jwt from 'jsonwebtoken';


export const authenticate = async (req, res, next) =>{
    
    const token = req.headers.authorization?.split(' ')[1];

    if(!token){
        return res.status(400).json({message: "Unauthorized: Token missing!"});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        console.log(req.user);
        next();

    }catch(error){
        console.error(error);
        return res.status(403).json({message : "Invalid or expired token!"});
    }

}