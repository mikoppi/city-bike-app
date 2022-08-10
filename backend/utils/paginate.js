const paginate = (modelName) => {
    return async (req, res, next) => {
        const page = parseInt(req.query.page, 10) || 1;
        const limit = parseInt(req.query.limit, 10) || 25;
        const startIndex = (page - 1) * limit;
        const endIndex = page * limit;
        const results = {};
        const total = await modelName.find({}).countDocuments().exec();
        results.last = Math.ceil(total / limit);

        if (endIndex < total) {
            results.next = {
            page: page + 1,
            limit: limit,
            };
        }

        if (startIndex > 0) {
            results.previous = {
            page: page - 1,
            limit: limit,
            };
        }

        try {
            results.results = await modelName
            .find({})
            .sort({})
            .limit(limit)
            .skip(startIndex)
            .exec();
            
            res.paginate = results
            next()
            
        } catch (e) {
            res.status(500).json({ message: e.message });
        }
    }
}

module.exports = paginate;