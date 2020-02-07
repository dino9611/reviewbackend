const {db}=require('./../connections')
const {uploader}=require('./../helper/uploader')
const fs=require('fs')

module.exports={
    postproducts:(req,res)=>{
        console.log(req.body)
        var sql=`Insert into product set ?`
        db.query(sql,req.body,(err,result)=>{
            if(err) return res.status(500).send(err)
            console.log('masuk')
            console.log(result)
            sql=`select * from product`
            db.query(sql,(err1,result1)=>{
                if(err1) return res.status(500).send(err1)
                console.log(result1)
                return res.status(200).send(result1)
            })
        })
    },
    posttransaksi:(req,res)=>{
        try {
            const path = '/transksi/images';
            const upload = uploader(path, 'TRANS').fields([{ name: 'image'}]);

            upload(req,res,(err)=>{
                if(err){
                    return res.status(500).json({ message: 'Upload picture failed !', error: err.message });
                }
                console.log('lewat')//pada tahap ini foto berhasil di upload
                const { image } = req.files;
                console.log(image)
                const imagePath = image ? path + '/' + image[0].filename : null;
                console.log(imagePath)
                console.log(req.body.data)
                const data = JSON.parse(req.body.data);
                console.log(data,'1')
                data.paymentimg = imagePath;
                data.tanggal=new Date()
                data.status='onwaitingPay'
                console.log(data,'2')
                var sql=`insert into transaksi set ?`
                db.query(sql,data,(err,result)=>{
                    if(err) {
                        fs.unlinkSync('./public' + imagePath);
                        return res.status(500).json({ message: "There's an error on the server. Please contact the administrator.", error: err.message });
                    }
                    sql=`select * from transaksi`
                    db.query(sql,(err1,result1)=>{
                        if(err1) return res.status(500).send(err1)
                        return res.status(200).send(result1)
                    })
                })
            })
        } catch (error) {
            return res.status(500).send(error)
        }
    },
    gettrasnaksi:(req,res)=>{
        console.log(req.query)
        var sql=`select * from transaksi`
        db.query(sql,(err,result)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(result)
        })
    }
}