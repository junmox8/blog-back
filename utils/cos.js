const { secretKey, secretId, bucket, region } = require("../json/cos.json");
const STS = require("qcloud-cos-sts");
const { returnSuccess, returnFail } = require("./http");

const config = {
  secretId,
  secretKey,
  bucket,
  region,
  allowPrefix: "*", // 这里改成允许的路径前缀，可以根据自己网站的用户登录态判断允许上传的具体路径
  allowActions: [
    // 简单上传
    "name/cos:PutObject",
    "name/cos:PostObject",
    // 分片上传
    "name/cos:InitiateMultipartUpload",
    "name/cos:ListMultipartUploads",
    "name/cos:ListParts",
    "name/cos:UploadPart",
    "name/cos:CompleteMultipartUpload",
  ],
};

const getTempSecret = async (req, res, path) => {
  const shortBucketName = config.bucket.substring(
    0,
    config.bucket.lastIndexOf("-")
  );
  const appId = config.bucket.substring(1 + config.bucket.lastIndexOf("-"));
  const policy = {
    version: "2.0",
    statement: [
      {
        action: config.allowActions,
        effect: "allow",
        principal: { qcs: ["*"] },
        resource: [
          "qcs::cos:" +
            config.region +
            ":uid/" +
            appId +
            ":prefix//" +
            appId +
            "/" +
            shortBucketName +
            "/" +
            config.allowPrefix,
        ],
      },
    ],
  };
  STS.getCredential(
    {
      secretId: config.secretId,
      secretKey: config.secretKey,
      region: config.region,
      durationSeconds: config.durationSeconds,
      policy: policy,
    },
    function (err, data) {
      if (err) {
        returnFail(res, "获取临时密钥失败");
      } else {
        returnSuccess(res, {
          data,
        });
      }
    }
  );
};

module.exports = getTempSecret;
