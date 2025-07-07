// Câu hỏi và đáp án đầy đủ (hiện tại chỉ là ví dụ 3 câu)
const questions = [
    {
        question: "Phạm vi điều chỉnh của thông tư 25/2020/TT-BQP?",
        answers: {
            A: "Thông tư này quy định việc lập kế hoạch, xây dựng, thẩm định, ban hành và áp dụng tiêu chuẩn quốc gia trong lĩnh vực quân sự, quốc phòng.",
            B: "Thông tư này quy định việc lập kế hoạch, xây dựng, thẩm định, ban hành và áp dụng tiêu chuẩn quốc gia, quy chuẩn kỹ thuật quốc gia trong lĩnh vực quân sự, quốc phòng.",
            C: "Thông tư này quy định việc lập kế hoạch, xây dựng, thẩm định, ban hành và áp dụng tiêu chuẩn quốc gia, quy chuẩn kỹ thuật quốc gia, tiêu chuẩn cơ sở trong lĩnh vực quân sự, quốc phòng.",
            D: "Thông tư này quy định việc lập kế hoạch, xây dựng, thẩm định, ban hành và áp dụng tiêu chuẩn quốc gia, tiêu chuẩn cơ sở trong lĩnh vực quân sự, quốc phòng.",
        },
        correct: "C",
    },
    {
        question: "Đối tượng áp dụng của thông tư 25/2020/TT-BQP là gì?",
        answers: {
            A: "Thông tư này áp dụng đối với các cơ quan, đơn vị liên quan đến lập kế hoạch, xây dựng, thẩm định, ban hành và áp dụng tiêu chuẩn quốc gia trong lĩnh vực quân sự, quốc phòng.",
            B: "Thông tư này áp dụng đối với các cơ quan, đơn vị liên quan đến lập kế hoạch, xây dựng, thẩm định, ban hành và áp dụng tiêu chuẩn quốc gia, quy chuẩn kỹ thuật quốc gia trong lĩnh vực quân sự, quốc phòng.",
            C: "Thông tư này áp dụng đối với các cơ quan, đơn vị liên quan đến lập kế hoạch, xây dựng, thẩm định, ban hành và áp dụng tiêu chuẩn quốc gia, quy chuẩn kỹ thuật quốc gia, tiêu chuẩn cơ sở trong lĩnh vực quân sự, quốc phòng.",
            D: "Thông tư này áp dụng đối với các cơ quan, đơn vị liên quan đến lập kế hoạch, xây dựng, thẩm định, ban hành và áp dụng tiêu chuẩn quốc gia, tiêu chuẩn cơ sở trong lĩnh vực quân sự, quốc phòng.",
        },
        correct: "C",
    },
    {
        question:
            "Trong các phương án dưới đây, phương án nào là căn cứ để xây dựng tiêu chuẩn quốc gia trong lĩnh vực quân sự, quốc phòng (TCVN/QS) quy định trong Thông tư 25/2020/TT-BQP?",
        answers: {
            A: "Tiêu chuẩn quốc tế, tiêu chuẩn khu vực, tiêu chuẩn nước ngoài.",
            B: "Tiêu chuẩn, tài liệu kỹ thuật của nhà sản xuất hoặc tính năng chiến kỹ thuật của vũ khí trang bị mua sắm, nhập khẩu, sản phẩm, hàng quốc phòng, công trình quốc phòng được Bộ trưởng Bộ Quốc phòng, Tổng Tham mưu trưởng phê duyệt.",
            C: "Hồ sơ thiết kế kỹ thuật sản phẩm quốc phòng được phê duyệt dấu B theo quy định của Bộ Quốc phòng.",
            D: "Kết quả nghiên cứu khoa học và công nghệ, tiến bộ kỹ thuật.",
            E: "Kết quả đánh giá, khảo nghiệm, kiểm tra, thử nghiệm, giám định.",
            F: "Tất cả các phương án trên. ",
        },
        correct: "F",
    },
    {
        question:
            "Trong các phương án dưới đây, phương án nào thuộc đối tượng xây dựng tiêu chuẩn quốc gia trong lĩnh vực quân sự, quốc phòng (TCVN/QS) quy định trong Thông tư 25/2020/TT-BQP?",
        answers: {
            A: "Vũ khí trang bị, sản phẩm, hàng quốc phòng; công trình quốc phòng.",
            B: "Thuật ngữ trong các ngành, chuyên ngành trong Quân đội.",
            C: "Phương pháp đo, kiểm tra, thử nghiệm, lấy mẫu.",
            D: "Lĩnh vực, quá trình cụ thể trong hoạt động quân sự, quốc phòng.",
            E: "Tất cả các phương án trên. ",
        },
        correct: "E",
    },
    {
        question:
            "Trong các phương án dưới đây, phương án nào là căn cứ để xây dựng quy chuẩn kỹ thuật quốc gia trong lĩnh vực quân sự, quốc phòng (QCVN/BQP) quy định trong Thông tư 25/2020/TT-BQP?",
        answers: {
            A: "Tiêu chuẩn quốc gia.",
            B: "Tiêu chuẩn quốc gia trong lĩnh vực quân sự, quốc phòng.",
            C: "Tiêu chuẩn quốc tế, tiêu chuẩn khu vực, tiêu chuẩn nước ngoài.",
            D: "Kết quả nghiên cứu khoa học và công nghệ, tiến bộ kỹ thuật.",
            E: "Kết quả đánh giá, khảo nghiệm, kiểm tra, thử nghiệm.",
            F: "Tất cả các phương án trên.",
        },
        correct: "F",
    },
    {
        question:
            "Trong các phương án dưới đây, phương án nào thuộc đối tượng xây dựng quy chuẩn kỹ thuật quốc gia trong lĩnh vực quân sự, quốc phòng (QCVN/BQP) quy định trong Thông tư 25/2020/TT-BQP?",
        answers: {
            A: "Vũ khí trang bị, sản phẩm, hàng quốc phòng; công trình quốc phòng.",
            B: "Lĩnh vực, quá trình cụ thể trong hoạt động quân sự, quốc phòng.",
            C: "Các loại máy, thiết bị, vật tư sử dụng cho mục đích quốc phòng, đặc thù quân sự.",
            D: "Phương tiện, trang thiết bị quân sự, vũ khí đạn dược, sản phẩm phục vụ quốc phòng, công trình quốc phòng không thuộc đối tượng bí mật quốc gia.",
        },
        correct: "D",
    },
    {
        question:
            "Tiêu chuẩn cơ sở trong lĩnh vực quân sự, quốc phòng (TCQS) gồm các loại nào quy định trong Thông tư 25/2020/II-BQP?",
        answers: {
            A: "Tiêu chuẩn cơ bản; tiêu chuẩn thuật ngữ; tiêu chuẩn yêu cầu kỹ thuật và tiêu chuẩn phương pháp.",
            B: "Tiêu chuẩn yêu cầu kỹ thuật; tiêu chuẩn phương pháp; tiêu chuẩn ghi nhãn, bao gói, vận chuyển và bảo quản và tiêu chuẩn toàn diện.",
            C: "Tiêu chuẩn yêu cầu kỹ thuật; tiêu chuẩn phương pháp; tiêu chuẩn toàn diện và tiêu chuẩn phân cấp chất lượng.",
            D: "Tiêu chuẩn cơ bản; tiêu chuẩn yêu cầu kỹ thuật; tiêu chuẩn phương pháp và tiêu chuẩn phân cấp chất lượng.",
        },
        correct: "B",
    },
    {
        question: "Tiêu chuẩn ISO 9001 để?",
        answers: {
            A: "Một sản phẩm có thể được chứng nhận tiêu chuẩn ISO 9001.",
            B: "Một dịch vụ có thể được chứng nhận tiêu chuẩn ISO 9001.",
            C: "Một hệ thống quản lý của tổ chức có thể được chứng nhận tiêu chuẩn ISO 9001.",
            D: "Một công ty/tổ chức có hơn 100 nhân viên có thể được chứng nhận tiêu chuẩn ISO 9001.",
        },
        correct: "C",
    },
    {
        question:
            "Lãnh đạo của tổ chức xem xét định kỳ hệ thống quản lý chất lượng của tổ chức để đảm bảo sự phù hợp, đầy đủ, hiệu quả. Kết quả (outputs) của việc xem xét của lãnh đạo bao gồm:",
        answers: {
            A: "Các cơ hội để cải tiến hệ thống quản lý chất lượng",
            B: "Nhu cầu thay đổi đối với hệ thống quản lý chất lượng",
            C: "Các nhu cầu về nguồn lực ",
            D: "Cả 3 phương án trên.",
        },
        correct: "D",
    },
    {
        question:
            "Nguyên tắc quản lý chất lượng nào không thuộc Tiêu chuẩn ISO 9001:2015?",
        answers: {
            A: "Quản lý theo quy trình",
            B: "Ra quyết định dựa trên bằng chứng",
            C: "Tối đa hóa lợi nhuận",
            D: "Tư duy dựa trên rủi ro",
        },
        correct: "C",
    },
    {
        question:
            "Đồng chí cho biết biện pháp bảo đảm liên kết chuẩn đo lường cho trang bị Đo lường-Thử nghiệm theo các quy định hiện hành bao gồm các biện pháp nào?",
        answers: {
            A: "Kiểm định, hiệu chuẩn, thử nghiệm.",
            B: "Kiểm định, thử nghiệm, giám định chất lượng.",
            C: "Kiểm định, hiệu chuẩn, giám định chất lượng",
            D: "Kiểm định, hiệu chuẩn, kiểm tra kỹ thuật đo lường.",
        },
        correct: "D",
    },
    {
        question:
            "Đồng chí cho biết theo Quyết định số 4148/QĐ-TĐC ngày 12/9/2019 của Cục trưởng Cục TC-ĐL-CL thì những loại Sổ nào được đóng thành Sổ hoặc dùng cặp file?",
        answers: {
            A: "Sổ thực lực trang bị ĐL-TN; Sổ giao nhận trang bị ĐL-TN/Sổ giao nhận mẫu thử nghiệm; Sổ quản lý tài liệu; Sổ quản lý cán bộ, nhân viên; Sổ kiểm định viên/Sổ thử nghiệm viên; Sổ theo dõi điều kiện môi trường.",
            B: "Sổ thực lực trang bị ĐL-TN; Sổ giao nhận trang bị ĐL-TN/Sổ giao nhận mẫu thử nghiệm; Sổ quản lý tài liệu; Sổ quản lý cán bộ, nhân viên; Sổ theo dõi điều kiện môi trường.",
            C: "Sổ thực lực trang bị ĐL-TN; Sổ quản lý tài liệu; Sổ quản lý cán bộ, nhân viên; Sổ kiểm định viên/Sổ thử nghiệm viên; Sổ theo dõi điều kiện môi trường.",
            D: "Sổ thực lực trang bị ĐL-TN; Sổ giao nhận trang bị ĐL-TN/Sổ giao nhận mẫu thử nghiệm; Sổ quản lý tài liệu; Sổ quản lý cán bộ, nhân viên; Sổ kiểm định viên/Sổ thử nghiệm viên.",
        },
        correct: "A",
    },
    {
        question:
            "Đồng chí nêu đơn vị đo sử dụng trong lĩnh vực quân sự, quốc phòng?",
        answers: {
            A: "Đơn vị đo sử dụng trong lĩnh vực quân sự, quốc phòng gồm các đơn vị đo pháp định, đơn vị đo khác theo quy định của Luật đo lường năm 2011.",
            B: "Đơn vị đo sử dụng trong lĩnh vực quân sự, quốc phòng gồm các đơn vị đo pháp định và các đơn vị đo đặc thù quân sự, quốc phòng.",
            C: "Đơn vị đo sử dụng trong lĩnh vực quân sự, quốc phòng gồm các đơn vị đo theo quy định của Luật đo lường năm 2011 và các đơn vị đo đặc thù quân sự, quốc phòng.",
            D: "Đơn vị đo sử dụng trong lĩnh vực quân sự, quốc phòng gồm các đơn vị đo pháp định, đơn vị đo khác theo quy định của Luật đo lường năm 2011, Nghị định 86/2012/NĐ-CP và các đơn vị đo đặc thù quân sự, quốc phòng.",
        },
        correct: "D",
    },
    {
        question:
            "Đồng chí nêu các cơ sở để phân cấp chất lượng phương tiện đo? ",
        answers: {
            A: "Cơ sở phân cấp chất lượng phương tiện đo bao gồm:- Đồng bộ;- Thời gian khai thác, sử dụng;- Kết quả kiểm tra kỹ thuật.",
            B: "Cơ sở phân cấp chất lượng phương tiện đo bao gồm:- Hồ sơ, lý lịch, tài liệu;- Thời gian khai thác, sử dụng;- Kết quả kiểm tra kỹ thuật.",
            C: "Cơ sở phân cấp chất lượng phương tiện đo bao gồm:- Hồ sơ, lý lịch, tài liệu;- Đồng bộ;- Kết quả kiểm tra kỹ thuật.",
            D: "Cơ sở phân cấp chất lượng phương tiện đo bao gồm:- Hồ sơ, lý lịch, tài liệu;- Đồng bộ;- Thời gian khai thác, sử dụng;- Kết quả kiểm tra kỹ thuật.",
        },
        correct: "D",
    },
    {
        question:
            "Đồng chí nêu nội dung về công tác kiểm định tại Điều 11 của Thông tư số 02/2019/TT-BQP?",
        answers: {
            A: "Kiểm định là biện pháp kiểm soát về đo lường được ưu tiên áp dụng đối với tất cả phương tiện đo được quản lý, sử dụng trong lĩnh vực quân sự, quốc phòng. Việc kiểm định do các cơ sở Đo lường-Chất lượng trong Bộ Quốc phòng và các tổ chức kiểm định ngoài Quân đội thực hiện.",
            B: "Kiểm định áp dụng đối với tất cả phương tiện đo được quản lý, sử dụng trong lĩnh vực quân sự, quốc phòng. Việc kiểm định do các cơ sở Đo lường-Chất lượng trong Bộ Quốc phòng và các tổ chức kiểm định ngoài Quân đội thực hiện.",
            C: "Kiểm định là biện pháp kiểm soát tất cả phương tiện đo sử dụng trong lĩnh vực quân sự, quốc phòng. Việc kiểm định do các cơ sở Đo lường-Chất lượng trong Bộ Quốc phòng và các tổ chức kiểm định ngoài Quân đội thực hiện.",
            D: "Kiểm định là biện pháp kiểm soát tất cả phương tiện đo sử dụng trong lĩnh vực quân sự, quốc phòng. Việc kiểm định do các cơ sở Đo lường-Chất lượng trong Bộ Quốc phòng.",
        },
        correct: "A",
    },
    {
        question:
            "Đồng chí nêu nội dung về công tác hiệu chuẩn tại Điều 12 của Thông tư số 02/2019/TT-BQP?",
        answers: {
            A: "Hiệu chuẩn áp dụng đối với các chuẩn đo lường, phương tiện đo chưa đủ điều kiện kiểm định, hoặc việc áp dụng kiểm định không phù hợp. Việc hiệu chuẩn được thực hiện tại nước ngoài, tại các tổ chức hiệu chuẩn ngoài Quân đội được cơ quan quản lý nhà nước về đo lường có thẩm quyền công nhận hoặc chỉ định và tại các cơ sở ĐL-CL cấp chiến lược, đầu chuyên ngành theo quy định.",
            B: "Hiệu chuẩn là hoạt động xác định, thiết lập mối quan hệ giữa giá trị đo của chuẩn đo lường, phương tiện đo với giá trị đo của đại lượng cần đo. Việc hiệu chuẩn được thực hiện tại các cơ sở Đo lường-Chất lượng cấp chiến thuật.",
            C: "Hiệu chuẩn là hoạt động xác định, thiết lập mối quan hệ giữa giá trị đo của chuẩn đo lường, phương tiện đo với giá trị đo của đại lượng cần đo; được áp dụng đối với các chuẩn đo lường, phương tiện đo chưa đủ điều kiện kiểm định, hoặc việc áp dụng kiểm định không phù hợp. Việc hiệu chuẩn được thực hiện tại nước ngoài, tại các tổ chức hiệu chuẩn ngoài Quân đội được cơ quan quản lý nhà nước về đo lường có thẩm quyền công nhận hoặc chỉ định và tại các cơ sở Đo lường-Chất lượng cấp chiến lược, đầu chuyên ngành theo quy định.",
            D: "Hiệu chuẩn là hoạt động xác định, thiết lập mối quan hệ giữa giá trị đo của chuẩn đo lường, phương tiện đo với giá trị đo của đại lượng đo. ",
        },
        correct: "C",
    },
    {
        question:
            "Trang bị Đo lường-Thử nghiệm bao gồm những thành phần nào sau đây?",
        answers: {
            A: "Phương án 1: Chất chuẩn, mẫu chuẩn; Phương tiện đo; Phương tiện thử nghiệm.",
            B: "Phương án 2: Chuẩn đo lường; Phương tiện đo; Phương tiện thử nghiệm.",
            C: "Phương án 3: Mẫu chuẩn; Phương tiện đo; Phương tiện thử nghiệm.",
            D: "Phương án 4: Phương tiện đo; Phương tiện thử nghiệm.",
        },
        correct: "B",
    },
    {
        question: "Tiêu chuẩn TCVN/QS 877:2014 là chuẩn mực để?",
        answers: {
            A: "Phương án 1:- Xây dựng năng lực kiểm định, hiệu chuẩn và giám định chất lượng;- Đánh giá công nhận năng lực kiểm định, hiệu chuẩn, giám định chất lượng của cơ sở ĐL-CL trong Quân đội;- Thừa nhận lẫn nhau về kết quả kiểm định, hiệu chuẩn, giám định chất lượng giữa các cơ sở ĐL-CL trong Quân đội.",
            B: "Phương án 2:- Đánh giá công nhận năng lực kiểm định, hiệu chuẩn, thử nghiệm của cơ sở ĐL-CL trong Quân đội;- Thừa nhận lẫn nhau về kết quả kiểm định, hiệu chuẩn, thử nghiệm giữa các cơ sở ĐL-CL trong Quân đội.",
            C: "Phương án 3:- Xây dựng năng lực kiểm định, hiệu chuẩn và thử nghiệm;- Đánh giá công nhận năng lực kiểm định, hiệu chuẩn, thử nghiệm của cơ sở ĐL-CL trong Quân đội;- Thừa nhận lẫn nhau về kết quả kiểm định, hiệu chuẩn, thử nghiệm giữa các cơ sở ĐL-CL trong Quân đội.",
            D: "Phương án 4:- Xây dựng năng lực kiểm định, thử nghiệm và giám định chất lượng;- Đánh giá công nhận năng lực kiểm định, thử nghiệm, giám định chất lượng của cơ sở ĐL-CL trong Quân đội;- Thừa nhận lẫn nhau về kết quả kiểm định, thử nghiệm, giám định chất lượng giữa các cơ sở ĐL-CL trong Quân đội.",
        },
        correct: "C",
    },
    {
        question:
            "Theo Thông tư số 138/2021/TT-BQP: Dấu nghiệp vụ sử dụng trong hoạt động kiểm định, hiệu chuẩn, thử nghiệm bao gồm những loại nào?",
        answers: {
            A: "Dấu Kiểm định, dấu Hiệu chuẩn, dấu Thử nghiệm, dấu Kẹp chì.",
            B: "Dấu Kiểm định, dấu Thử nghiệm, dấu Kẹp chì, dấu Hành chính.",
            C: "Dấu Kiểm định, dấu Hiệu chuẩn, dấu Thử nghiệm, dấu Hành chính.",
            D: "Dấu Kiểm định, dấu Hiệu chuẩn, dấu Kẹp chì, dấu Hành chính.",
        },
        correct: "A",
    },
    {
        question:
            "Theo Quy định số 623/QyĐ-TM ngày 29/02/2024 của Tổng Tham mưu trưởng Quân đội nhân dân Việt Nam về hoạt động công nhận năng lực kiểm định, hiệu chuẩn và thử nghiệm đối với cơ sở ĐL-CL: Trong thời gian hiệu lực của Quyết định công nhận năng lực, cơ sở ĐL-CL phải duy trì thường xuyên hoạt động kiểm định, hiệu chuẩn và thử nghiệm. Quy định mỗi phép đo, phép thử được công nhận phải thực hiện tối thiểu như nào?",
        answers: {
            A: "Trên 3 mẫu/năm.",
            B: "Trên 4 mẫu/năm.",
            C: "04 mẫu/năm/01 kiểm định viên, thử nghiệm viên.",
            D: "Trên 5 mẫu/năm.",
        },
        correct: "C",
    },
    {
        question:
            "Đồng chí hãy cho biết dấu Kiểm định được sử dụng để đóng lên các văn bản, giấy tờ nào?",
        answers: {
            A: "Giấy chứng nhận kiểm định, Biên bản kiểm định.",
            B: "Giấy chứng nhận kiểm định, Lý lịch PTĐ.",
            C: "Giấy chứng nhận kiểm định, Tem kiểm định, Lý lịch PTĐ.",
            D: "Giấy chứng nhận kiểm định, Biên bản kiểm định, Lý lịch PTĐ.",
        },
        correct: "B",
    },
    {
        question:
            "Đồng chí hãy cho biết dấu Hiệu chuẩn được sử dụng để đóng lên các văn bản, giấy tờ nào?",
        answers: {
            A: "Giấy chứng nhận hiệu chuẩn, Lý lịch PTĐ.",
            B: "Giấy chứng nhận hiệu chuẩn, Biên bản hiệu chuẩn.",
            C: "Giấy chứng nhận hiệu chuẩn, Tem hiệu chuẩn, Lý lịch PTĐ.",
            D: "Giấy chứng nhận hiệu chuẩn, Biên bản hiệu chuẩn, Lý lịch PTĐ.",
        },
        correct: "A",
    },
    {
        question:
            "Theo Quy định hệ thống sổ sách, mẫu biểu quản lý đo lường ban hành theo Quyết định số 4148/QĐ-TĐC ngày 12/9/2019 của Cục trưởng Cục TC-ĐL-CL; việc áp dụng trang bị công nghệ thông tin để lập file dữ liệu điện tử, chế bản, in ấn sổ sách, mẫu biểu quản lý đo lường là?",
        answers: {
            A: "Quy định áp dụng.",
            B: "Khuyến khích áp dụng.",
            C: "Theo khả năng của cơ sở.",
            D: "Theo khả năng của cơ sở.",
        },
        correct: "A",
    },
    {
        question:
            "Theo Quy định hệ thống sổ sách, mẫu biểu quản lý đo lường ban hành theo Quyết định số 4148/QĐ-TĐC ngày 12/9/2019 của Cục trưởng Cục TC-ĐL-CL; Thông tin trong bảng “Theo dõi sử dụng” của Lý lịch phương tiện đo do người trực tiếp sử dụng phương tiện đo cập nhật theo thời gian như thế nào?",
        answers: {
            A: "Hàng ngày.",
            B: "Hàng tuần.",
            C: "Hàng tháng.",
            D: "Hàng năm.",
        },
        correct: "C",
    },
    {
        question:
            "Theo Quy định hoạt động công nhận năng lực kiểm định, hiệu chuẩn và thử nghiệm đối với cơ sở ĐL-CL, tiêu chí về đạo tạo để chứng nhận chuyên gia đánh giá là gì?",
        answers: {
            A: "Tốt nghiệp trung cấp trở lên. Đã qua đào tạo về nghiệp vụ đo lường, nghiệp vụ đánh giá năng lực cơ sở ĐL-CL trong Quân đội hoặc đã qua đào tạo về đánh giá phòng thí nghiệm của cơ quan, tổ chức công nhận phòng thí nghiệm trong nước và quốc tế.",
            B: "Tốt nghiệp đại học, cao đẳng trở lên. Được cấp chứng chỉ đã qua tập huấn, bồi dưỡng về nghiệp vụ đo lường, nghiệp vụ đánh giá năng lực cơ sở ĐL-CL trong Quân đội hoặc đã qua đào tạo về đánh giá phòng thí nghiệm của cơ quan, tổ chức công nhận phòng thí nghiệm trong nước và quốc tế. ",
            C: "Tốt nghiệp đại học trở lên. Được cấp chứng chỉ đã qua tập huấn, bồi dưỡng về nghiệp vụ đo lường, nghiệp vụ đánh giá năng lực cơ sở ĐL-CL trong Quân đội hoặc đã qua đào tạo về đánh giá phòng thí nghiệm của cơ quan, tổ chức công nhận phòng thí nghiệm trong nước và quốc tế.",
            D: "Tốt nghiệp đại học, cao đẳng trở lên. Đã qua đào tạo về nghiệp vụ đo lường, nghiệp vụ đánh giá năng lực cơ sở ĐL-CL trong Quân đội hoặc đã qua đào tạo về đánh giá phòng thí nghiệm của cơ quan, tổ chức công nhận phòng thí nghiệm trong nước và quốc tế.",
        },
        correct: "C",
    },
    {
        question:
            "Trách nhiệm của cơ quan TC-ĐL-CL các cấp trong tổ chức, thực hiện công tác giám định là gì?",
        answers: {
            A: "Chỉ đạo các cơ quan, đơn vị liên quan chuẩn bị đầy đủ các yếu tố cần thiết, dụng cụ, phương tiện, vật tư kỹ thuật, trường thử, lực lượng; hồ sơ, tài liệu kỹ thuật phục vụ cho việc giám định chất lượng.",
            B: "Tham mưu cho người chỉ huy tổ chức giám định chất lượng hàng quốc phòng theo các quyết định phê duyệt của chỉ huy cấp mình và theo nhiệm vụ của cấp có thẩm quyền giao. Quản lý, chỉ đạo nghiệp vụ đối với cơ sở giám định và tổ chức hướng dẫn, xây dựng năng lực giám định; đề nghị công nhận năng lực cơ sở giám định trong phạm vi quản lý của mình. Báo cáo người chỉ huy và Cục Tiêu chuẩn-Đo lường-Chất lượng về kết quả giám định chất lượng hàng quốc phòng mua trong nước, nhập khẩu và sản phẩm đặt hàng sản xuất.",
            C: "Phối hợp với đơn vị mua sắm, sản xuất hàng hóa quản lý chặt chẽ trong tổ chức thực hiện hợp đồng; trong tiếp nhận, giám định chất lượng hàng quốc phòng;",
            D: "Chịu trách nhiệm chính về chất lượng hàng quốc phòng mua trong nước, nhập khẩu và đặt hàng sản xuất.",
        },
        correct: "B",
    },
    {
        question: "Hồ sơ hàng quốc phòng gồm những loại nào sau đây?",
        answers: {
            A: "Các văn bản pháp lý; Các giấy chứng nhận; Tài liệu kỹ thuật và Các tài liệu khác",
            B: "Chứng nhận xuất xứ, chứng nhận chất lượng hoặc chứng nhận phù hợp  hoặc các hồ sơ, tài liệu có giá trị pháp lý tương đương; Giấy chứng nhận hiệu chuẩn hoặc giấy chứng nhận kiểm định đối với phương tiện đo; Chứng nhận bảo hành (nếu có), báo cáo thử nghiệm hàng hoá (nếu có).",
            C: "Công văn đăng ký giám định chất lượng; Quyết định phê duyệt kế hoạch mua sắm, sản xuất; phê duyệt dự án, phê duyệt thiết kế kỹ thuật-tổng dự toán; Quyết định phê duyệt tính năng chiến-kỹ thuật của cấp có thẩm quyền; Hợp đồng ủy thác nhập khẩu, hợp đồng ngoại thương/hợp đồng mua bán.",
            D: "Giấy chứng nhận kiểm định trang thiết bị y tế và các trang thiết bị có quy định phải kiểm định an toàn theo quy định của các Bộ quản lý ngành; Bản quyền phần mềm (bản giấy, file điện tử, khoá cứng, tài khoản,…) cấp cho người dùng cuối (đối với các phần mềm thương mại); Chứng nhận hợp quy, công bố hợp quy (nếu thuộc hàng hoá nhóm 2).",
        },
        correct: "A",
    },
    {
        question: "Nội dung phúc tra giám định chất lượng?",
        answers: {
            A: "Tổ chức phúc tra định kỳ theo kế hoạch năm; thời gian phúc tra bắt đầu từ ngày 25 tháng 12 hàng năm;",
            B: "Lấy mẫu và thử nghiệm tính năng của hàng quốc phòng; Thông báo kết quả phúc tra theo quy định.",
            C: "Kiểm tra văn bản, tài liệu, hồ sơ hàng hóa; Lấy mẫu và thử nghiệm tính năng của hàng quốc phòng khi cần thiết; Thông báo kết quả phúc tra theo quy định.",
            D: "Cả ba phương án trên.",
        },
        correct: "C",
    },
    {
        question:
            "Trong trường hợp nào thì ưu tiên sử dụng Cơ sở thử nghiệm phục vụ giám định?",
        answers: {
            A: "Cơ sở ĐL-CL được công nhận năng lực giám định.",
            B: "Cơ sở kỹ thuật được công nhận năng lực thử nghiệm loại hàng quốc phòng đó.",
            C: "Cơ sở ĐL-CL được công nhận năng lực thử nghiệm loại hàng quốc phòng đó.",
            D: "Cơ sở ĐL-CL được công nhận năng lực kiểm định, thử nghiệm.",
        },
        correct: "C",
    },
    {
        question: "Nội dung kiểm tra chất lượng sản phẩm là gì?",
        answers: {
            A: "Đánh giá đúng thực trạng chất lượng của sản phẩm trong quá trình sản xuất, sửa chữa; kiểm tra chất lượng sản phẩm phải thực hiện theo quy trình kiểm tra.",
            B: "Quản lý hồ sơ kiểm tra chất lượng đầu vào; Quản lý hồ sơ kiểm tra chất lượng trong quá trình sản xuất, sửa chữa; Quản lý hồ sơ kiểm tra chất lượng xuất xưởng; Quản lý mẫu và trang bị Đo lường-Thử nghiệm.",
            C: "Xây dựng và ban hành Quy trình kiểm tra; Kiểm tra đầu vào; Kiểm tra trong quá trình sản xuất, sửa chữa; Kiểm tra xuất xưởng.",
            D: "Cả 3 phương án trên.",
        },
        correct: "C",
    },
    {
        question: "Cơ quan nào thực hiện kiểm tra chất lượng sản phẩm?",
        answers: {
            A: "Cơ quan, cán bộ được cơ sở sản xuất, sửa chữa giao nhiệm vụ thực hiện chức năng của cơ quan kiểm tra chất lượng sản phẩm.",
            B: "Cục Tiêu chuẩn-Đo lường-Chất lượng.",
            C: "Cục Hậu cần-Kỹ thuật thuộc các quân khu, quân đoàn, quân binh chủng.",
            D: "Ngành Tiêu chuẩn-Đo lường-Chất lượng các cấp.",
        },
        correct: "A",
    },
    {
        question:
            "Các loại vật tư nào bắt buộc phải tổ chức kiểm tra, thử nghiệm hoặc trưng cầu giám định chất lượng?",
        answers: {
            A: "Vật tư đầu vào bị mất, mờ ký hiệu, nhãn hiệu. ",
            B: "Các loại dầu mỡ, hoá chất không còn nguyên bao gói.",
            C: "Các vật tư, các cụm tổng thành nghi ngờ về chất lượng hoặc không đủ hồ sơ, lý lịch sản phẩm.",
            D: "Cả ba phương án trên.",
        },
        correct: "D",
    },
    {
        question:
            "Nội dung kiểm tra nhà nước về chất lượng đối với hàng quốc phòng mua trong nước, nhập khẩu gồm những nội dung gì?",
        answers: {
            A: "Kiểm tra sự đầy đủ; tính pháp lý; sự phù hợp với các hồ sơ, tài liệu kỹ thuật của hàng quốc phòng.",
            B: "Xem xét sự phù hợp của sản phẩm, hàng hóa so với hợp đồng hoặc với tiêu chuẩn công bố áp dụng, quy chuẩn kỹ thuật tương ứng bằng cách quan trắc và đánh giá kết quả đo, thử nghiệm.",
            C: "Kiểm tra kết quả đánh giá sự phù hợp của cơ quan, đơn vị có thẩm quyền;  Kiểm tra tài liệu, hồ sơ mua sắm, nhập khẩu hàng hóa; Lấy mẫu và thử nghiệm tính năng của hàng quốc phòng trong trường hợp kiểm tra hai nội dung trên không đạt yêu cầu.",
            D: "Kiểm tra các điều kiện bảo đảm chất lượng trong sản xuất; Kiểm tra kết quả đánh giá sự phù hợp, nhãn hàng hóa và hồ sơ, tài liệu kèm theo đối với sản phẩm, hàng hóa; Thử nghiệm mẫu theo yêu cầu kỹ thuật, tính năng kỹ thuật được cấp có thẩm quyền phê duyệt trong trường hợp kiểm tra hai nội dung trên không đạt yêu cầu.",
        },
        correct: "C",
    },
    {
        question:
            "Bộ Quốc phòng sử dụng phương thức chứng nhận sản phẩm quốc phòng hợp chuẩn nào?",
        answers: {
            A: "Phương thức thử nghiệm mẫu điển hình.",
            B: "Phương thức thử nghiệm mẫu điển hình kết hợp đánh giá quá trình sản xuất.",
            C: "Phương thức thử nghiệm mẫu điển hình và đánh giá quá trình sản xuất; giám sát thông qua thử nghiệm mẫu lấy tại nơi sản xuất hoặc đơn vị sử dụng kết hợp với đánh giá quá trình sản xuất.",
            D: "Cả 3 phương án trên.",
        },
        correct: "C",
    },
    {
        question: "Tiêu chuẩn nào để chứng nhận sản phẩm hợp chuẩn?",
        answers: {
            A: "Tiêu chuẩn quốc gia trong lĩnh vực quân sự quốc phòng.",
            B: "Tiêu chuẩn cơ sở trong lĩnh vực quân sự quốc phòng.",
            C: "Tiêu chuẩn nước ngoài được Bộ Quốc phòng chấp nhận hoặc quy chuẩn kỹ thuật tương ứng.",
            D: "Cả ba phương án trên.",
        },
        correct: "D",
    },
    {
        question:
            "Điều lệ CTKT QĐNDVN được ban hành tại văn bản quy phạm pháp luật nào? ",
        answers: {
            A: "Thông tư 05/2023/TT-BQP ngày 18/12/2022 của Bộ Quốc phòng.",
            B: "Thông tư 06/2023/TT-BQP ngày 19/01/2023 của Bộ Quốc phòng.",
            C: "Thông tư 07/2023/TT-BQP ngày 20/02/2023 của Bộ Quốc phòng.",
            D: "Thông tư 08/2023/TT-BQP ngày 21/03/2023 của Bộ Quốc phòng.",
        },
        correct: "B",
    },
    {
        question:
            "Theo Điều lệ CTKT QĐNDVN “Bảo đảm trang bị kỹ thuật” được giải thích như thế nào? ",
        answers: {
            A: "Bảo đảm trang bị kỹ thuật là tổng hợp các phương thức, biện pháp nhằm bảo đảm số lượng, chủng loại trang bị kỹ thuật theo mệnh lệnh của người chỉ huy, đáp ứng đúng, đủ, kịp thời cho mọi hoạt động của Quân đội và Dân quân tự vệ.",
            B: "Bảo đảm trang bị kỹ thuật là tổng hợp các phương thức, biện pháp nhằm bảo đảm số lượng, chủng loại trang bị kỹ thuật theo mệnh lệnh của người chỉ huy, đáp ứng đúng, đủ, kịp thời cho mọi hoạt động của Quân đội.",
            C: "Bảo đảm trang bị kỹ thuật là tổng hợp các phương thức, biện pháp nhằm bảo đảm số lượng, chất lượng trang bị kỹ thuật theo mệnh lệnh của người chỉ huy, đáp ứng đúng, đủ, kịp thời cho mọi hoạt động của Quân đội.",
            D: "Bảo đảm trang bị kỹ thuật là tổng hợp các phương thức, biện pháp nhằm bảo đảm số lượng, chất lượng trang bị kỹ thuật theo mệnh lệnh của người chỉ huy, đáp ứng đúng, đủ, kịp thời cho mọi hoạt động của Quân đội và Dân quân tự vệ.",
        },
        correct: "B",
    },
    {
        question:
            "Theo Điều lệ CTKT QĐNDVN “Bảo đảm kỹ thuật” được giải thích như thế nào? ",
        answers: {
            A: "Bảo đảm kỹ thuật là tổng thể các hoạt động nhằm đáp ứng kịp thời chất lượng trang bị kỹ thuật của các đơn vị Quân đội khi thực hiện nhiệm vụ.",
            B: "Bảo đảm kỹ thuật là tổng thể các hoạt động nhằm đáp ứng kịp thời chất lượng, đồng bộ trang bị kỹ thuật của các đơn vị Quân đội khi thực hiện nhiệm vụ.",
            C: "Bảo đảm kỹ thuật là tổng thể các hoạt động nhằm đáp ứng kịp thời chất lượng, đồng bộ và khả năng khai thác trang bị kỹ thuật của các đơn vị Quân đội khi thực hiện nhiệm vụ.",
            D: "Bảo đảm kỹ thuật là tổng thể các hoạt động nhằm đáp ứng kịp thời chất lượng, đồng bộ và khả năng khai thác trang bị kỹ thuật của các đơn vị Quân đội và Dân quân tự vệ khi thực hiện nhiệm vụ.",
        },
        correct: "C",
    },
    {
        question:
            "Theo Điều lệ CTKT QĐNDVN “Bảo đảm kỹ thuật cho trang bị” được giải thích như thế nào?",
        answers: {
            A: "Bảo đảm kỹ thuật cho trang bị là tổng thể các hình thức, biện pháp duy trì tính năng kỹ thuật của trang bị, nhằm sử dụng trang hiệu quả, bảo đảm an toàn, đáp ứng yêu cầu nhiệm vụ của Quân đội và Dân quân tự vệ.",
            B: "Bảo đảm kỹ thuật cho trang bị là tổng thể các hình thức, biện pháp duy trì tính năng chiến- kỹ thuật, độ tin cậy, tuổi thọ của trang bị, nhằm sử dụng trang hiệu quả, bảo đảm an toàn, đáp ứng yêu cầu nhiệm vụ của Quân đội.",
            C: "Bảo đảm kỹ thuật cho trang bị là tổng thể các hình thức, biện pháp duy trì và phục hồi tính năng chiến- kỹ thuật, độ tin cậy, tuổi thọ của trang bị, nhằm sử dụng trang hiệu quả, bảo đảm an toàn, đáp ứng yêu cầu nhiệm vụ của Quân đội và Dân quân tự vệ.",
            D: "Bảo đảm kỹ thuật cho trang bị là tổng thể các hình thức, biện pháp duy trì và phục hồi tính năng chiến- kỹ thuật, độ tin cậy, tuổi thọ của trang bị, nhằm sử dụng trang hiệu quả, bảo đảm an toàn, đáp ứng yêu cầu nhiệm vụ của Quân đội.",
        },
        correct: "D",
    },
    {
        question:
            "Theo Điều lệ CTKT QĐNDVN “Cơ quan đầu chuyên ngành kỹ thuật” được giải thích như thế nào?",
        answers: {
            A: "Cơ quan đầu chuyên ngành kỹ thuật là cơ quan kỹ thuật giúp việc cho cơ quan đầu ngành kỹ thuật về công tác kỹ thuật, tổ chức thực hiện nội dung công tác kỹ thuật trong Quân đội nhân dân Việt Nam.",
            B: "Cơ quan đầu chuyên ngành kỹ thuật là cơ quan kỹ thuật phối hợp với cơ quan đầu ngành kỹ thuật về công tác kỹ thuật chuyên ngành, tổ chức thực hiện nội dung công tác kỹ thuật chuyên ngành trong Quân đội nhân dân Việt Nam và Dân quân tự vệ.",
            C: "Cơ quan đầu chuyên ngành kỹ thuật là cơ quan kỹ thuật tham mưu cho cơ quan đầu ngành kỹ thuật về công tác kỹ thuật chuyên ngành, tổ chức thực hiện nội dung công tác kỹ thuật chuyên ngành trong Quân đội nhân dân Việt Nam và Dân quân tự vệ.",
            D: "Cơ quan đầu chuyên ngành kỹ thuật là cơ quan kỹ thuật tham mưu cho cơ quan đầu ngành kỹ thuật về công tác kỹ thuật, tổ chức thực hiện nội dung công tác kỹ thuật trong Quân đội nhân dân Việt Nam.",
        },
        correct: "C",
    },
    {
        question:
            "Theo Điều lệ CTKT QĐNDVN “Công tác kỹ thuật” gồm mấy nội dung cơ bản?",
        answers: {
            A: "4 nội dung. ",
            B: "5 nội dung.",
            C: "6 nội dung.",
            D: "7 nội dung.",
        },
        correct: "D",
    },
    {
        question:
            "Theo Điều lệ CTKT QĐNDVN, “Công tác kỹ thuật” gồm những nội dung cơ bản nào? ",
        answers: {
            A: "Tham gia bảo đảm trang bị kỹ thuật; Bảo đảm kỹ thuật cho trang bị; Huấn luyện kỹ thuật; Hoạt động khoa học quân sự; Công tác an toàn, vệ sinh lao động; Quản lý, xây dựng ngành kỹ thuật và đối ngoại kỹ thuật quân sự; Động viên kỹ thuật",
            B: "Bảo đảm trang bị kỹ thuật; Bảo đảm kỹ thuật; Huấn luyện kỹ thuật; Hoạt động khoa học quân sự; Công tác an toàn, vệ sinh lao động; Quản lý, xây dựng ngành kỹ thuật; Động viên kỹ thuật.",
            C: "Bảo đảm trang bị kỹ thuật; Bảo đảm kỹ thuật cho trang bị; Huấn luyện kỹ thuật; Hoạt động khoa học và Thông tin khoa học quân sự; Công tác an toàn, vệ sinh lao động; Quản lý, xây dựng ngành kỹ thuật; Động viên kỹ thuật.",
            D: "Tham gia bảo đảm trang bị kỹ thuật; Bảo đảm kỹ thuật; Huấn luyện kỹ thuật; Hoạt động khoa học và Thông tin khoa học quân sự; Công tác an toàn, vệ sinh lao động; Quản lý, xây dựng ngành kỹ thuật và đối ngoại kỹ thuật quân sự; Động viên kỹ thuật.",
        },
        correct: "A",
    },
    {
        question:
            "Theo Điều lệ CTKT QĐNDVN, Quân đội được tổ chức thành bao nhiêu chuyên ngành kỹ thuật? ",
        answers: {
            A: "16 chuyên ngành kỹ thuật.",
            B: "17 chuyên ngành kỹ thuật.",
            C: "18 chuyên ngành kỹ thuật.",
            D: "19 chuyên ngành kỹ thuật.",
        },
        correct: "C",
    },
    {
        question:
            "Theo Điều lệ CTKT QĐNDVN, Quân đội được tổ chức thành những chuyên ngành kỹ thuật nào? ",
        answers: {
            A: "(1) Công binh; (2) Cơ yếu; (3) Đạn dược; (4) Đạn dược; (5) Tiêu chuẩn- Đo lường- Chất lượng; (6) Hóa học- Phóng xạ; (7) Máy bay; (8) Ra đa; (9) Súng pháo; (10) Tác chiến điện tử; (11) Tàu thuyền; (12) Tăng, thiết giáp; (13) Tên lửa; (14) Thông tin; (15) Tình báo- trinh sát; (16) Xe- Máy.",
            B: "(1)  Công binh; (2) Công nghệ thông tin; (3) Cơ yếu; (4) Đạn dược; (5) Đo lường; (6) Hóa học- Phóng xạ; (7) Khí tài điện tử- Quang học; (8) Không quân; (9) Súng pháo; (10) Tác chiến điện tử; (11) Tàu thuyền; (12) Tăng, thiết giáp; (13) Phòng không; (14) Thông tin; (15) Tình báo- trinh sát; (16) Vũ khí dưới nước; (17) Xe- Máy",
            C: "(1) Công binh; (2) Công nghệ thông tin; (3) Cơ yếu; (4) Đạn dược; (5) Đo lường; (6) Hóa học- Phóng xạ; (7) Khí tài điện tử- Quang học; (8) Máy bay; (9) Ra đa; (10) Súng pháo; (11) Tác chiến điện tử; (12) Tàu thuyền; (13) Tăng, thiết giáp; (14) Tên lửa; (15) Thông tin; (16) Tình báo- trinh sát; (17) Vũ khí dưới nước; (18) Xe- Máy",
            D: "1) Công binh; (2) Công nghệ thông tin; (3) Cơ yếu; (4) Đạn dược; (5) Tiêu chuẩn- Đo lường- Chất lượng; (6) Hóa học- Phóng xạ; (7) Khí tài điện tử- Quang học; (8) Máy bay; (9) Ra đa; (10) Súng pháo; (11) Tác chiến điện tử; (12) Tàu thuyền; (13) Tăng, thiết giáp; (14) Tên lửa; (15) Thông tin; (16) Tình báo- trinh sát; (17) Vũ khí dưới nước; (18) Đặc công; (19) Xe- Máy.",
        },
        correct: "C",
    },
    {
        question:
            "Theo Điều lệ CTKT QĐNDVN, Cục Tiêu chuẩn - Đo lường - Chất lượng là cơ quan đầu chuyên ngành kỹ thuật nào? ",
        answers: {
            A: "Cục Tiêu chuẩn - Đo lường - Chất lượng là cơ quan đầu chuyên ngành kỹ thuật Tiêu chuẩn.",
            B: "Cục Tiêu chuẩn - Đo lường - Chất lượng là cơ quan đầu chuyên ngành kỹ thuật Đo lường.",
            C: "Cục Tiêu chuẩn - Đo lường - Chất lượng là cơ quan đầu chuyên ngành kỹ thuật Chất lượng.",
            D: "Cục Tiêu chuẩn - Đo lường - Chất lượng là cơ quan đầu chuyên ngành kỹ thuật Tiêu chuẩn - Đo lường - Chất lượng và Đăng kiểm quân sự.",
        },
        correct: "B",
    },
    {
        question:
            "Theo Quy định số 711/QyĐ-TĐC ngày 11/4/2025 của Cục trưởng Cục TC-ĐL-CL thuật ngữ “Loại khỏi biên chế tài sản” được giải thích như thế nào?",
        answers: {
            A: "Là việc đưa trang bị ĐL-TN không còn khả năng sửa chữa, phục hồi hoặc ngoài quy hoạch sử dụng ra khỏi trang bị quân sự.",
            B: "Là việc đưa trang bị ĐL-TN không còn khả năng sửa chữa hoặc ngoài quy hoạch sử dụng ra khỏi trang bị quân sự.",
            C: "Là việc đưa trang bị ĐL-TN không còn khả năng sửa chữa, phục hồi ra khỏi trang bị quân sự.",
            D: "Là việc đưa trang bị ĐL-TN không còn khả năng phục hồi hoặc ngoài quy hoạch sử dụng ra khỏi trang bị quân sự.",
        },
        correct: "A",
    },
    {
        question:
            "Theo Quy định số 711/QyĐ-TĐC ngày 11/4/2025 của Cục trưởng Cục TC-ĐL-CL thuật ngữ “Xử lý trang bị ĐL-TN” được giải thích như thế nào? ",
        answers: {
            A: "Là việc tiếp tục khai thác, sử dụng trang bị ĐL-TN làm mô hình học cụ, tháo gỡ lấy vật tư linh kiện, tiêu hủy sau khi đã loại khỏi biên chế tài sản theo quyết định của cấp có thẩm quyền.",
            B: "Là việc tiếp tục khai thác, sử dụng trang bị ĐL-TN làm mô hình học cụ, tiêu hủy, bán đấu giá sau khi đã loại khỏi biên chế tài sản theo quyết định của cấp có thẩm quyền.",
            C: "Là việc tiếp tục khai thác, sử dụng trang bị ĐL-TN làm mô hình học cụ, tháo gỡ lấy vật tư linh kiện, tiêu hủy, bán đấu giá sau khi đã loại khỏi biên chế tài sản theo quyết định của cấp có thẩm quyền.",
            D: "Là việc tiếp tục khai thác, sử dụng trang bị ĐL-TN tháo gỡ lấy vật tư linh kiện, tiêu hủy, bán đấu giá sau khi đã loại khỏi biên chế tài sản theo quyết định của cấp có thẩm quyền.",
        },
        correct: "C",
    },
    {
        question:
            "Đồng chí cho biết các trường hợp được đề nghị loại trang bị ĐL-TN khỏi biên chế tài sản?",
        answers: {
            A: "Không còn nằm trong quy hoạch sử dụng; Hết tuổi thọ theo quy định của nhà sản xuất mà không thể kéo dài thời hạn sử dụng được.",
            B: "Phân cấp chất lượng 5.",
            C: "Không hoạt động được do thiếu và không có các đồng bộ để thay thế.",
            D: "Cả 3 trường hợp trên.",
        },
        correct: "D",
    },
    {
        question:
            "Cơ quan nào là cơ quan thường trực kiểm kê trang bị ĐL-TN trong Cục TC-ĐL-CL? ",
        answers: {
            A: "Phòng Tham mưu - Kế hoạch.",
            B: "Phòng Kỹ thuật - Vật tư. ",
            C: "Phòng Quản lý Đo lường.",
            D: "Ban Tài chính.",
        },
        correct: "A",
    },
    {
        question:
            "Đồng chí cho biết Quy định số 711/QyĐ-TĐC ngày 11/4/2025 của Cục trưởng Cục TC-ĐL-CL quy định quá trình bàn giao/tiếp nhận trang bị ĐL-TN phải thực hiện những công việc gì? ",
        answers: {
            A: "Phải tiến hành kiểm kê về số lượng, đồng bộ, kiểm tra chất lượng, giá trị nguyên giá, sổ lý lịch phương tiện đo và tài liệu kỹ thuật kèm theo.",
            B: "Phải tiến hành kiểm kê về số lượng, đồng bộ, kiểm tra chất lượng, giá trị nguyên giá, giá trị còn lại theo sổ kế toán đối với từng trang bị ĐL-TN, sổ lý lịch phương tiện đo và tài liệu kỹ thuật kèm theo.",
            C: "Phải phối hợp với cơ quan, đơn vị có liên quan tiến hành kiểm kê về số lượng, đồng bộ, kiểm tra chất lượng, giá trị nguyên giá, giá trị còn lại theo sổ kế toán đối với từng trang bị ĐL-TN, sổ lý lịch phương tiện đo và tài liệu kỹ thuật kèm theo.",
            D: "Phải phối hợp với cơ quan, đơn vị có liên quan tiến hành kiểm kê về số lượng, đồng bộ, kiểm tra chất lượng, giá trị còn lại theo sổ kế toán đối với từng trang bị ĐL-TN, sổ lý lịch phương tiện đo và tài liệu kỹ thuật kèm theo.",
        },
        correct: "C",
    },
    {
        question:
            "Đồng chí cho biết Quy định số 711/QyĐ-TĐC ngày 11/4/2025 của Cục trưởng Cục TC-ĐL-CL quy định trong Biên bản giao nhận trang bị ĐL-TN phải thể hiện đầy đủ, chính xác các trường thông tin nào?",
        answers: {
            A: "Số lượng, đồng bộ (trang bị đồng bộ; vật tư kỹ thuật (VTKT); hướng dẫn sử dụng; giấy chứng nhận kiểm định/hiệu chuẩn,…), ký/nhãn hiệu, số hiệu, tình trạng.",
            B: "Số lượng, đồng bộ (trang bị đồng bộ; vật tư kỹ thuật (VTKT); tài liệu khai thác, hướng dẫn sử dụng; ký/nhãn hiệu, số hiệu, tình trạng.",
            C: "Số lượng, đồng bộ (trang bị đồng bộ; vật tư kỹ thuật (VTKT); tài liệu khai thác, hướng dẫn sử dụng; giấy chứng nhận kiểm định/hiệu chuẩn,…), ký/nhãn hiệu, số hiệu.",
            D: "Số lượng, đồng bộ (trang bị đồng bộ; vật tư kỹ thuật (VTKT); tài liệu khai thác, hướng dẫn sử dụng; giấy chứng nhận kiểm định/hiệu chuẩn,…), ký/nhãn hiệu, số hiệu, tình trạng.",
        },
        correct: "D",
    },
    {
        question:
            "Đồng chí cho biết Quy định số 711/QyĐ-TĐC ngày 11/4/2025 của Cục trưởng Cục TC-ĐL-CL quy định có bao nhiêu nguyên tắc khai thác, sử dụng trang bị ĐL-TN?",
        answers: {
            A: "5 nguyên tắc quản lý.",
            B: "6 nguyên tắc quản lý.",
            C: "7 nguyên tắc quản lý.",
            D: "8 nguyên tắc quản lý.",
        },
        correct: "A",
    },
    {
        question:
            "Đồng chí cho biết theo Quy định số 711/QyĐ-TĐC ngày 11/4/2025 của Cục trưởng Cục TC-ĐL-CL việc mang trang bị ĐL-TN ra ngoài cơ quan, đơn vị để sử dụng phải nằm trong kế hoạch công tác (sử dụng) được cấp nào phê duyệt? ",
        answers: {
            A: "Trưởng phòng, ban các Trung tâm thuộc Cục TC-ĐL-CL phê duyệt.",
            B: "Chỉ huy các Trung tâm thuộc Cục TC-ĐL-CL phê duyệt.",
            C: "Thủ trưởng Cục TC-ĐL-CL phê duyệt.",
            D: "Thủ trưởng Bộ Tổng Tham mưu phê duyệt.",
        },
        correct: "B",
    },
    {
        question:
            "Đồng chí cho biết trang bị ĐL-TN phân cấp chất lượng 4 chưa có kế hoạch sửa chữa và trang bị ĐL-TN phân cấp chất lượng 5 chờ loại khỏi biên chế tài sản có phải tổ chức bảo quản không? ",
        answers: {
            A: "Không phải bảo quản.",
            B: "Thỉnh thoảng lau chùi bụi bẩn.",
            C: "Phải bảo quản theo quy định.",
            D: "Thỉnh thoảng sấy máy.",
        },
        correct: "C",
    },
    {
        question:
            "Đồng chí cho biết việc cập nhật, ghi chép tình trạng liên kết chuẩn đo lường và đóng dấu nghiệp vụ cho trang bị ĐL-TN vào Sổ lý lịch phương tiện đo do tổ chức, cá nhân nào thực hiện? ",
        answers: {
            A: "Người quản lý trang bị ĐL-TN thực hiện.",
            B: "Cơ sở ĐL-CL quản lý trang bị ĐL-TN thực hiện. ",
            C: "Cơ quan TC-ĐL-CL các cấp thực hiện.",
            D: "Cơ sở ĐL-CL bảo đảm liên kết chuẩn cho trang bị ĐL-TN thưc hiện.",
        },
        correct: "D",
    },
    {
        question: "Đại lượng được hiểu là gì?",
        answers: {
            A: "Tính chất của một hiện tượng, một vật hay một chất có độ lớn được thể hiện qua một con số. ",
            B: "Đại lượng được lựa chọn trong hệ và có tính độc lập: không thể biểu thị nó qua các đại lượng khác.",
            C: "Được định nghĩa từ các đại lượng cơ bản trong hệ đại lượng.",
            D: "Tính chất của một hiện tượng, một vật hay một chất có độ lớn được thể hiện qua một con số và một giá trị quy chiếu. ",
        },
        correct: "D",
    },
    {
        question:
            "Hệ đại lượng quốc tế (ISQ) dựa trên các đại lượng cơ bản nào?",
        answers: {
            A: "Dựa vào 07 đại lượng cơ bản: độ dài, thời gian, khối lượng, cường độ dòng điện, nhiệt độ nhiệt động lực, lượng chất và cường độ ánh sáng. ",
            B: "Dựa vào 07 đại lượng cơ bản: độ dài, thời gian, khối lượng, điện áp, nhiệt độ nhiệt động lực, lượng chất và cường độ ánh sáng. ",
            C: "Dựa vào 07 đại lượng cơ bản: độ dài, thời gian, điện áp, cường độ dòng điện, nhiệt độ nhiệt động lực, lượng chất và cường độ ánh sáng",
            D: "Dựa vào 07 đại lượng cơ bản: độ dài, thời gian, khối lượng, cường độ dòng điện, nhiệt độ nhiệt động lực, áp suất và cường độ ánh sáng.",
        },
        correct: "D",
    },
    {
        question: "Đơn vị đo được hiểu là gì?",
        answers: {
            A: "Giá trị quy chiếu cùng với các con số để thể hiện độ lớn của đại lượng.",
            B: "Đặc trưng cho tính chất của một vật, sự việc",
            C: "Độ lớn của nó được chọn độc lập với những đơn vị khác ",
            D: "Tập hợp các đơn vị cơ bản và các đơn vị dẫn xuất suy ra từ đơn vị cơ bản theo 1 nguyên tắc nhất định.",
        },
        correct: "A",
    },
    {
        question: "Tên các đơn vị cơ bản của hệ Hệ đơn vị quốc tế SI?",
        answers: {
            A: "kilôgam; mét; giây; ampe; kenvin; mol; candela.",
            B: "kilôgam; mét; giây; vôn; kenvin; candela; mol.",
            C: "kilôgam; mét; giây; ampe; công; candela; mol.",
            D: "mét; giây; ampe; kenvin; candela; mol.",
        },
        correct: "A",
    },
    {
        question: "Khái niệm chuẩn đo lường được hiểu là gì?",
        answers: {
            A: "Chuẩn đo lường là phương tiện kỹ thuật để thể hiện phép đo nhằm xác định giá trị đại lượng đo. Chất chuẩn, mẫu chuẩn không là chuẩn đo lường. ",
            B: "Chuẩn đo lường là phương tiện kỹ thuật để thể hiện, duy trì đơn vị đo của đại lượng đo và được dùng làm chuẩn để so sánh với phương tiện đo hoặc chuẩn đo lường khác. Chất chuẩn, mẫu chuẩn không là chuẩn đo lường.",
            C: "Chuẩn đo lường là phương tiện kỹ thuật để thực hiện xác định giá trị đại lượng cần đo. Chất chuẩn, mẫu chuẩn không là chuẩn đo lường.",
            D: "Chuẩn đo lường là phương tiện kỹ thuật để thể hiện, duy trì đơn vị đo của đại lượng đo và được dùng làm chuẩn để so sánh với phương tiện đo hoặc chuẩn đo lường khác. Chất chuẩn, mẫu chuẩn là một dạng đặc biệt của chuẩn đo lường.",
        },
        correct: "D",
    },
    {
        question:
            "Theo mục đích sử dụng, các loại chuẩn được phân loại theo thứ tự nào sau đây?",
        answers: {
            A: "Chuẩn quốc tế; chuẩn quốc gia; chuẩn chính; chuẩn công tác.",
            B: "Chuẩn quốc gia; chuẩn chính; chuẩn công tác; chuẩn quốc tế.",
            C: "Chuẩn chính; chuẩn quốc gia; chuẩn quốc tê; chuẩn công tác.",
            D: "Chuẩn quốc tế; chuẩn chính; chuẩn công tác; chuẩn công tác.",
        },
        correct: "A",
    },
    {
        question:
            "Khi đo vận tốc của một vật, cách ghi kết quả nào sau đây đúng?",
        answers: {
            A: "1000 m/s",
            B: "1 000m/s",
            C: "1000 m × s-1  ",
            D: "1 000 m × s-1 ",
        },
        correct: "D",
    },
    {
        question: "Khái niệm phép đo là gì?",
        answers: {
            A: "Phép đo là tập hợp các thao tác sử dụng các phương tiện đo để xác định giá trị của đại lượng đo.",
            B: "Phép đo là tập hợp các thao tác sử dụng các phương tiện đo để xác định độ chính xác của phương tiện đo.",
            C: "Phép đo là tập hợp các thao tác sử dụng các phương tiện đo để xác định sai số của phương tiện đo.",
            D: "Phép đo là tập hợp các thao tác sử dụng các phương tiện đo để xác định mối liện hệ giữa các đại lượng đo.",
        },
        correct: "A",
    },
    {
        question:
            "Phân loại phép đo theo phương pháp nhận được kết quả đo gồm những loại nào sau đây?",
        answers: {
            A: "Phép đo trực tiếp, phép đo gián tiếp, phép đo tĩnh, phép đo động. ",
            B: "Phép đo trực tiếp, phép đo tĩnh, phép đo động.",
            C: "Phép đo trực tiếp, phép đo gián tiếp.",
            D: "Phép đo gián tiếp, phép đo tĩnh, phép đo động.",
        },
        correct: "C",
    },
    {
        question: "Sai số tuyệt đối của phép đo là gì?",
        answers: {
            A: "Là sự sai lệch giữa kết quả đo và giá trị thực của đại lượng đo. ",
            B: "Là sự sai lệch giữa phép đo trực tiếp và phép đo gián tiếp.",
            C: "Là sự sai lệch của lần đo thứ nhất với lần đo thứ hai. ",
            D: "Là sự sai lệch lần đo thứ nhất với giá trị đo trung bình của một số lần đo.",
        },
        correct: "A",
    },
    {
        question: "Công thức tính sai số tuyệt đối của phép đo như thế nào?",
        answers: {
            A: "A.	∆ =Xđo-Xtq   trong đó: Xđo   - là giá trị đo; Xtq – là giá trị thực quy ước của đại lượng đo. ",
            B: "B.	∆=Xtq-Xđo trong đó:  Xđo   - là giá trị đo; Xtq – là giá trị thực quy ước của đại lượng đo.",
            C: "C.	∆=Xđo-Xlt trong đó:Xđo   - là giá trị đo; Xlt - là giá trị lý tưởng của đại lượng đo",
            D: "D.	∆=Xđo-Xt trong đó:Xđo  - là giá trị đo; Xt - là giá trị thực của đại lượng đo.",
        },
        correct: "A",
    },
    {
        question: "Khái niệm sai số tương đối của phép đo như thế nào?",
        answers: {
            A: "Hiệu giữa sai số tương đối và sai số tuyệt đối, thường được tính theo phần trăm (%).",
            B: "Tỷ số giữa sai số tuyệt đối và giá trị thực quy ước, thường được tính theo phần trăm (%).",
            C: "Tỷ số giữa sai số tuyệt đối với giá trị đo, thường được tính theo phần trăm (%)",
            D: "Tỷ số giữa sai số tuyệt đối với giá trị đo trung bình, thường được tính theo phần trăm (%).",
        },
        correct: "A",
    },
    {
        question: "Công thức tính sai số tương đối phép đo như thế nào?",
        answers: {
            A: ".δ=∆X/X_tq ×100 	(%) trong đó:δ - là sai số tương đối của phép đo thường được tính theo phần trăm (%).∆X - là sai số tuyệt đối của phép đo. Xtq - là giá trị thực quy ước (giá trị của chuẩn).",
            B: "δ=∆X/X_đo ×100  trong đó:δ - là sai số tương đối của phép đo thường được tính theo phần trăm (%).∆X  - là sai số tuyệt đối của phép đo. Xđo - là giá trị đo",
            C: "δ=∆X/X_tb ×100  trong đó:δ - là sai số tương đối của phép đo thường được tính theo phần trăm (%)∆X - là sai số tuyệt đối của phép đo. Xtb - là giá trị trung bình của phép đo. ",
            D: "δ=∆X/X_tđ ×100  trong đó:δ - là sai số tương đối của phép đo thường được tính theo phần trăm (%)∆X - là sai số tuyệt đối của phép đo Xtđ - là giá trị cuối thang đo",
        },
        correct: "A",
    },
    {
        question:
            "Phân loại sai số phép đo theo nguyên nhân gây sai có các loại sai số nào?",
        answers: {
            A: "Sai số hệ thống; sai số ngẫu nhiên.",
            B: "Sai số hệ thống, sai số thô.",
            C: "Sai số hệ thống thống; Sai số ngẫu nhiêu; sai số thô. ",
            D: "Sai số ngẫu nhiên, sai số thô.",
        },
        correct: "C",
    },
    {
        question:
            "Các nguyên nhân gây sai số hệ thống gồm những nguyên nhân nào?",
        answers: {
            A: "Do sự thay đổi ngẫu nhiên của các yêu tố ảnh hưởng như nhiệt độ, áp suất.",
            B: "Do phương tiện đo sai, do lắp đặt phương tiện đo không đúng, do điều kiện môi trường không đảm bảo quy định, do phương pháp đo, do người đo.",
            C: "Do phương tiện đo sai, do lắp đặt phương tiện đo không đúng.",
            D: "Do lắp đặt phương tiện đo sai, do điều kiện môi trường không đảm bảo quy định, do phương pháp đo, do người đo.",
        },
        correct: "B",
    },
    {
        question: "Nguyên nhân gây sai số ngẫu nhiên là gì?",
        answers: {
            A: "Tác động ảnh hưởng của các yếu tố hệ thống chưa phát hiện được.",
            B: "Tác động tổng hợp của rất nhiều yêu tố ngẫu nhiên không thể hoàn toàn loại bỏ, bao gồm cả những ảnh hưởng của các yếu tố hệ thống chưa phát hiện được.",
            C: "Tác động tổng hợp của rất nhiều yêu tố có thể hoàn toàn loại bỏ.",
            D: "Tác động tổng hợp của rất nhiều yêu tố ngẫu nhiên nhưng có thể hoàn toàn loại bỏ, bao gồm cả những ảnh hưởng của các yếu tố hệ thống chưa phát hiện được.",
        },
        correct: "B",
    },
    {
        question: "Các biện pháp nào loại trừ sai số hệ thống?",
        answers: {
            A: "Loại trừ sai số do PTĐ (kiểm định, hiệu chuẩn, bảo quản, bảo dưỡng, khai thác, vận hành PTĐ đúng quy định)",
            B: "Lắp đặt PTĐ đúng quy định; tránh sai số gây ra bởi người đo",
            C: "Bảo đảm các điều kiện môi trường ảnh hưởng đến kết quả đo; chọn phương pháp đo đúng, phù hợp",
            D: "Tất cả các cách trên (a,b,c).",
        },
        correct: "D",
    },
    {
        question:
            "Khi kiểm định ôm kế chỉ thị kim bằng hộp điện trở chuẩn tại điểm kiểm tra 1 MΩ, kết quả trên hộp điện trở là 999,884 5 kΩ, sai số tuyệt đối phép đo tại điểm kiểm tra là kết quả nào sau đây?",
        answers: {
            A: "0,115 5 kΩ",
            B: "- 0,115 5 kΩ",
            C: "0,115 5 MΩ",
            D: "- 0,115 5 MΩ",
        },
        correct: "B",
    },
    {
        question: "Khái niệm phương tiện đo là gì?",
        answers: {
            A: "Phương tiện kỹ thuật được dùng độc lập hoặc cùng một số phương tiện đo khác, thiết bị phụ trợ để thực hiện phép đo.",
            B: "Phương tiện kỹ thuật để thử nghiệm.",
            C: "Phương tiện kỹ thuật được dùng để sản xuất phương tiện đo.",
            D: "Phương tiện kỹ thuật được dùng độc lập hoặc cùng một số phương tiện đo khác, thiết bị phụ trợ để thực hiện xác định giá trị đơn vị đo.",
        },
        correct: "A",
    },
    {
        question:
            "Phương tiện đo gồm các loại nào khi phân loại theo nguyên lý cấu trúc?",
        answers: {
            A: "PTĐ tác động trực tiếp; PTĐ so sánh; PTĐ đo tổng.",
            B: "PTĐ tác động trực tiếp; PTĐ tích phân.",
            C: "PTĐ so sánh; đo tổng.",
            D: "PTĐ so sánh, PTĐ tương tự (analog), PTĐ hiện số (digital).",
        },
        correct: "A",
    },
    {
        question: "Bảo đảm liên kết chuẩn gồm các hình thức nào?",
        answers: {
            A: "Kiểm định; Hiệu chuẩn; So sánh liên phòng ",
            B: "Kiểm định; Hiệu chuẩn; Kiểm tra kỹ thuật đo lường; ",
            C: "Kiểm định; Hiệu chuẩn; Kiểm tra kỹ thuật đo lường; So sánh liên phòng; Thử nghiệm thành thạo.",
            D: "Kiểm định; Hiệu chuẩn; Thử nghiệm thành thạo;.",
        },
        correct: "B",
    },
    {
        question: "Khái niệm nào sau đây đúng về kiểm định phương tiện đo?",
        answers: {
            A: "Là tính chất của kết quả đo hoặc giá trị của một chuẩn mà nhờ đó có thể liên hệ tới các chuẩn đã định thường là chuẩn quốc gia hay chuẩn quốc tế.",
            B: "Là toàn bộ các thao tác do một tổ chức của cơ quan quản lý nhà nước về đo lường (hoặc được ủy quyền) tiến hành nhằm xác định và chứng nhận rằng phương tiện đo thỏa mãn hoàn toàn các yêu cầu đã quy định..",
            C: "Là tập hợp các thao tác trong điều kiện quy định để thiết lập mới quan hệ giữa các giá trị được chỉ/thể hiện bởi phương tiện đo, hệ thống đo, vật đọ hoặc mẫu chuẩn và các giá trị tương ứng thể hiện bằng chuẩn.",
            D: "Là tập hợp các thao tác để xác định sai số của phương tiện đo.",
        },
        correct: "B",
    },
    {
        question: "Khái niệm nào sau đây đúng về hiệu chuẩn PTĐ?",
        answers: {
            A: "Là toàn bộ các thao tác do một tổ chức của cơ quan quản lý nhà nước về đo lường (hoặc được ủy quyền) tiến hành nhằm xác định và chứng nhận rằng phương tiện thỏa mãn hoàn toàn các yêu cầu đã quy định.",
            B: "Là tính chất của kết quả đo hoặc giá trị của một chuẩn mà nhờ đó có thể liên hệ tới các chuẩn đã định thường là chuẩn quố giá hay chuẩn quốc tế.",
            C: "Là tâp hợp các thao tác trong điều kiện quy định để thiết lập mối quan hệ giữa các giá trị được chỉ/thể hiện bởi phương tiện đo, hệ thống đo, vật đọ hoặc mẫu chuẩn và các giá trị tương ứng thể hiện bằng chuẩn.",
            D: "Là tập hợp các thao tác để xác định sai số của phương tiện đo.",
        },
        correct: "C",
    },
    {
        question:
            "Các nội dung chính (cơ bản) của một quy trình kiểm định PTĐ là gì?",
        answers: {
            A: "1. Phạm vi áp dụng; 2. Các phép kiểm định; 3. Phương tiện kiểm định; 4. Điều kiện kiểm định; 5. Tiến hành kiểm định; 6. Xử lý chung và phần phụ lục;",
            B: "1. Phạm vi áp dụng; 2. Các phép kiểm định; 3. Phương tiện kiểm định; 4. Điều kiện kiểm định; 5. Xử lý chung và phần phụ lục;",
            C: "1. Phạm vi áp dụng; 2. Các phép kiểm định; 2. Giải thích thuật ngữ; 4. Điều kiện kiểm định; 5. Tiến hành kiểm định; 6. Xử lý chung và phần phụ lục;",
            D: "1. Phạm vi áp dụng; 2. Giải thích thuật ngữ; 3. Các phép kiểm định; 4. Phương tiện kiểm định; 5. Điều kiện kiểm định; 6. Xử lý chung và phần phụ lục;",
        },
        correct: "A",
    },
    {
        question: "Kiểm định PTĐ gồm những nội dung gì?",
        answers: {
            A: "Kiểm tra, đánh giá các yêu cầu kỹ thuật phương tiện đo xem có còn nằm trong giới hạn đã quy định không?",
            B: "Kiểm tra bên ngoài, kiểm tra kỹ thuật PTĐ.",
            C: "Kiểm tra, đánh giá các yêu cầu kỹ thuật phương tiện đo xem có còn nằm trong giới hạn đã quy định không? Nếu còn thì cấp chứng chỉ chứng nhận kiểm định cho PTĐ đo theo quy định",
            D: "Kiểm tra, đánh giá các yêu cầu kỹ thuật phương tiện đo xem có còn nằm trong giới hạn đã quy định không? Nếu còn thì không cần cấp chứng chỉ chứng nhận kiểm định cho PTĐ nữa.",
        },
        correct: "C",
    },
    {
        question: "Lựa chọn chuẩn để kiểm định như thế nào?",
        answers: {
            A: "Chuẩn phải có phạm vi đo lớn hơn hoặc bằng phạm vi đo của PTĐ cần kiểm định, có sai số nhỏ hơn ít nhất 3 lần so với sai số PTĐ cần kiểm định.",
            B: "Chuẩn phải có phạm vi đo nhỏ hơn phạm vi đo của PTĐ cần kiểm định, có sai số nhỏ hơn ít nhất 3 lần so với sai số PTĐ cần kiểm định.",
            C: "Chuẩn phải có phạm vi đo lớn hoặc bằng phạm vi đo của PTĐ cần kiểm định, có sai số bằng với sai số PTĐ cần kiểm định.",
            D: "Chuẩn phải có phạm vi đo lớn hoặc bằng phạm vi đo của PTĐ cần kiểm định, có sai số nhỏ hơn ít nhất 10 lần so với sai số PTĐ cần kiểm định.",
        },
        correct: "A",
    },
    {
        question: "Kiểm định gồm các phương pháp nào?",
        answers: {
            A: "Phương pháp so sánh thông qua phương tiện so sánh; phương pháp kiểm định bằng mẫu chuẩn trực tiếp;",
            B: "Phương pháp kiểm định bằng mẫu chuẩn trực tiếp; Phương pháp so sánh trực tiếp",
            C: "Phương pháp so sánh trực tiếp; Phương pháp so sánh thông qua phương tiện so sánh;",
            D: "Phương pháp so sánh trực tiếp; Phương pháp so sánh thông qua phương tiện so sánh; phương pháp kiểm định bằng mẫu chuẩn trực tiếp",
        },
        correct: "D",
    },
    {
        question:
            "Để đảm bảo giá trị sử dụng của kết quả trong hiệu chuẩn gồm các hoạt động nào?",
        answers: {
            A: "Huấn luyện thành thạo; So sánh liên phòng; Hiệu chuẩn thành thạo; So sánh vòng; Thử nghiệm thành thạo; Hiệu chuẩn thành thạo .",
            B: "So sánh liên phòng; Hiệu chuẩn thành thạo; So sánh vòng ",
            C: "So sánh liên phòng; Thử nghiệm thành thạo; Hiệu chuẩn thành thạo",
            D: "So sánh liên phòng; So sánh vòng; Thử nghiệm thành thạo; Hiệu chuẩn thành thạo",
        },
        correct: "B",
    },
    {
        question: "Khái niệm độ không đảm bảo đo là gì?",
        answers: {
            A: "Thông số không âm đặc trưng cho sự phân tán của các giá trị đại lượng được quy cho đại lượng đo, trên cơ sở thông tin đã sử dụng;",
            B: "Mức độ gần nhau giữa giá trị đại lượng đo được và giá trị đại lượng thực của đại lượng đo.",
            C: "Thông số không âm đặc trưng cho sự phân tán chung của đại lượng đo, trên cơ sở thông tin đã sử dụng",
            D: "Thông số không âm đặc trưng cho sự phân tán chung của giá trị thực, trên cơ sở thông tin đã sử dụng.",
        },
        correct: "A",
    },
    {
        question: "Khái niệm Độ chính xác đo (accuracy) được hiểu như thế nào?",
        answers: {
            A: "Mức độ gần nhau giữa giá trị đại lượng đo được và giá trị đại lượng thực của đại lượng đo;",
            B: "Mức độ gần nhau giữa các kết quả thử nghiệm độc lập nhận được trong điều kiện quy định;",
            C: "Mức độ gần nhau giữa kết quả thử nghiệm và giá trị quy chiếu được chấp nhận;",
            D: "TMức độ gần nhau giữa trung bình của một số vô hạn các giá trị đại lượng đo được lặp lại và giá trị đại lượng quy chiếu.",
        },
        correct: "C",
    },
    {
        question:
            "Hãy cho biết đánh giá sự phù hợp khi thực hiện phép hiệu chuẩn mà trong tiêu chuẩn, quy định kỹ thuật yêu cầu giới hạn trên và giới hạn dưới như hình bên dưới, kết quả được đánh giá là 'Đạt' trong trường hợp nào sau đây?",
        image: "./images/de-1.jpg",
        answers: {
            A: "Trường hợp 1, 2; ",
            B: "Trường hợp 1, 2, 3; ",
            C: "Trường hợp 1;",
            D: "Trường hợp 1, 3;",
        },
        correct: "C",
    },
    {
        question: "Khái niệm hệ số độ nhạy trong hiệu chuẩn như thế nào?",
        answers: {
            A: "Là hệ số nhân được sử dụng để tổng hợp các thành phần độ không đảm bảo đo sang đúng đơn vị và độ lớn trong ước lượng độ không đảm bảo đo.",
            B: "Là tỷ số giữa sự thay đổi số chỉ của hệ thống đo và sự thay đổi tương ứng trong giá trị của đại lượng đang được đo.",
            C: "Là hệ số được sử dụng để mô tả cách ước tính đầu ra y thay đổi theo sự thay đổi trong các giá trị ước tính đầu vào x 1 , x 2 , …, x n ;",
            D: "Là hệ số chuyển đổi độ không đảm bảo đo của các biến đầu ra sang độ không đảm bảo đo của kết quả đo.",
        },
        correct: "C",
    },
    {
        question:
            "Hãy cho biết đánh giá sự phù hợp khi thực hiện phép hiệu chuẩn mà trong tiêu chuẩn, quy định kỹ thuật yêu cầu giới hạn trên và giới hạn dưới như hình bên dưới, kết quả được đánh giá là 'Không Đạt' trong trường hợp nào sau đây?",
        image: "./images/de-2.jpg",
        answers: {
            A: "Trường hợp 3, 4; ",
            B: "Trường hợp 4",
            C: "Trường hợp 2, 3;.",
            D: "Trường hợp 2, 3, 4;  ",
        },
        correct: "B",
    },
    {
        question:
            "Cho sơ đồ khối của một thiết bị đo tần số theo hình sau, quy trình sửa chữa được tiến hành theo trình tự nào đúng",
        image: "./images/de-3.jpg",
        answers: {
            A: "1,2,3,4,5,6,7",
            B: "7,5,6,1,2,3,4",
            C: "7,1,2,3,4,5,6.",
            D: "7,5,6,3,1,2,4",
        },
        correct: "B",
    },
    {
        question:
            "Thiết bị đo tần số có sơ đồ khối như hình dưới được xây dựng trên phương pháp đo tần số nào?",
        image: "./images/de-4.jpg",
        answers: {
            A: "Phương pháp biến đổi ngoại sai;",
            B: "Phương pháp cộng hưởng;",
            C: "Phương pháp đếm xung;",
            D: "Phương pháp biến đổi tần số-điện áp",
        },
        correct: "C",
    },
    {
        question: "Cơ cấu chỉ thị nào hoạt động đối với dòng xoay chiều?",
        answers: {
            A: "Từ điện, điện từ ",
            B: "Từ điện, điện động",
            C: "Điện từ, điện động",
            D: "Tất cả đều đúng",
        },
        correct: "C",
    },
    {
        question:
            "Quan hệ ngõ vào và ra của cơ cấu chỉ thị điện từ là một hàm nào sau đây?",
        answers: {
            A: "Tuyến tính",
            B: "Phi tuyến",
            C: "Bất kỳ ",
            D: "Tất cả đều đúng",
        },
        correct: "B",
    },
    {
        question: "Nhược điểm của cơ cấu chỉ thị điện từ là gì?",
        answers: {
            A: "Tiêu thụ công suất lớn",
            B: "Ảnh hưởng của từ trường bên ngoài lớn",
            C: "Kém chính xác, thang đo không đều",
            D: "Tất cả đều đúng",
        },
        correct: "D",
    },
    {
        question: "Nhược điểm của cơ cấu chỉ thị điện động là gì?",
        answers: {
            A: "Tiêu thụ công suất lớn, độ nhạy thấp",
            B: "Ảnh hưởng của từ trường bên ngoài lớn",
            C: "Thang đo không đều",
            D: "Tất cả đều đúng",
        },
        correct: "D",
    },
    {
        question:
            "Kiểm tra điện trở cách điện của thiết bị Nguồn đo lường EVA-5100A là kiểm tra điện trở theo cách nào sau đây?",
        answers: {
            A: "Giữa 2 cực của phích nguồn nuôi",
            B: "Giữa 2 cực của phích nguồn nuôi và vỏ .",
            C: "Giữa vỏ và các cọc đầu ra",
            D: "Giữa các cọc đầu ra và 2 cực của phích nguồn nuôi",
        },
        correct: "D",
    },
    {
        question:
            "Sau sửa chữa Nguồn đo lường EVA-5100A, mức điện áp dùng để kiểm tra tham số độ bền cách điện giữa đầu ra và vỏ thiết bị là giá trị nào sau đây?",
        answers: {
            A: "1,5 kV",
            B: "2 kV",
            C: "2,5 kV",
            D: "3 kV",
        },
        correct: "C",
    },
    {
        question:
            "Trong khi kiểm tra áp kế lò xo giá trị tại các điểm kiểm tra đều sai số tuyến tính dương thì người sửa chữa cần chỉnh như thế nào để khắc phục tình trạng trên?",
        answers: {
            A: "Điều chỉnh giá đỡ đế số 8",
            B: "Điều chỉnh kim chỉ thị",
            C: "Điều chỉnh khoảng cách thanh truyền",
            D: "Cả ba phương án trên",
        },
        correct: "C",
    },
    {
        question:
            "Đồng chí cho biết kích thước dưỡng kiểm tra mòn nòng (K2) của Bộ dưỡng kiểm tra súng bộ binh dùng đạn cỡ 7,62 mm?",
        answers: {
            A: "7,772 mm",
            B: "7,752 mm",
            C: "7,762 mm",
            D: "7,742 mm",
        },
        correct: "A",
    },
    {
        question:
            "Đồng chí cho biết khi kiểm tra áp suất cuối quá trình nén cần đánh giá những tham số nào?",
        answers: {
            A: "Giới hạn áp suất của xi lanh",
            B: "Chênh lệch áp suất giữa các xi lanh",
            C: "Chênh lệch áp suất giữa 2 xi lanh cạnh nhau",
            D: "Phương án a, b",
        },
        correct: "D",
    },
    {
        question:
            "Theo hướng dẫn 1272/HD-TM ngày 23/4/2024, nội dung lấy mẫu để thử nghiệm tính năng chiến-kỹ thuật của hàng quốc phòng có thể tiến hành nhiều nhất bao nhiêu lần?",
        answers: {
            A: "2 lần",
            B: "3 lần",
            C: "5 lần",
            D: "Không giới hạn số lần",
        },
        correct: "B",
    },
    {
        question:
            "Theo hướng dẫn 1272/HD-TM ngày 23/4/2024, tỷ lệ % lấy mẫu để thử nghiệm tính năng chiến-kỹ thuật của hàng quốc phòng có thể tiến hành nhiều nhất?",
        answers: {
            A: "10 %",
            B: "20 %",
            C: "50 %",
            D: "100 %",
        },
        correct: "D",
    },
    {
        question: "Khái niệm thử nghiệm chất lượng được hiểu như thế nào?",
        answers: {
            A: "Là thao tác kỹ thuật nhằm xác định tất cả đặc tính của vũ khí trang bị, sản phẩm, hàng quốc phòng theo một quy trình nhất định;",
            B: "Là phương pháp nhằm xác định tất cả đặc tính của vũ khí trang bị, sản phẩm, hàng quốc phòng theo một quy trình nhất định",
            C: "Là thao tác kỹ thuật nhằm xác định một đặc tính của vũ khí trang bị, sản phẩm, hàng quốc phòng theo một quy trình nhất định;",
            D: "Là thao tác kỹ thuật nhằm xác định một hay nhiều đặc tính của vũ khí trang bị, sản phẩm, hàng quốc phòng theo một quy trình nhất định",
        },
        correct: "D",
    },
    {
        question: "Khái niệm chất lượng sản phẩm được hiểu như thế nào?",
        answers: {
            A: "Là mức độ của các đặc tính của sản phẩm nhằm đáp ứng yêu cầu đặt ra (các tính năng chiến thuật, kỹ thuật) và được quy định trong tiêu chuẩn, quy chuẩn kỹ thuật",
            B: "Là mức độ của các đặc tính của sản phẩm nhằm đáp ứng yêu cầu đặt ra (bộ bền, độ tin cậy) và được quy định trong tiêu chuẩn, quy chuẩn kỹ thuật",
            C: "Là mức độ của các đặc tính của sản phẩm nhằm đáp ứng yêu cầu đặt ra (các tính năng chiến thuật, kỹ thuật, bộ bền, độ tin cậy)",
            D: "Là mức độ của các đặc tính của sản phẩm nhằm đáp ứng yêu cầu đặt ra (các tính năng chiến thuật, kỹ thuật, bộ bền, độ tin cậy) và được quy định trong tiêu chuẩn, quy chuẩn kỹ thuật.",
        },
        correct: "D",
    },
    {
        question:
            "Khi kiểm tra độ chụm bánh xe ô tô con thì bánh xe được kiểm tra ở trạng thái nào?",
        answers: {
            A: "Đang vận hành trên đường.",
            B: "Dừng tại chỗ.",
            C: "Quay trơn.",
            D: "Cả ba trường hợp trên đều được",
        },
        correct: "C",
    },
    {
        question: "Tầm bắn xa nhất của súng tiểu liên AK bao nhiêu?",
        answers: {
            A: "1 500 m",
            B: "2 000 m",
            C: "2 500 m",
            D: "3 000 m",
        },
        correct: "D",
    },
];

// Hàm random thứ tự câu hỏi và đáp án
function shuffleArray(array) {
    return array.sort(() => Math.random() - 0.5);
}

const testCode = Math.random().toString(36).substring(2, 8).toUpperCase();
document.getElementById("test-code").textContent = testCode;

const labelSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

// Lấy ngẫu nhiên 40 câu từ danh sách câu hỏi
const randomizedQuestions = shuffleArray([...questions])
    .slice(0, 40)
    .map((q) => {
        const shuffled = shuffleArray(Object.entries(q.answers));
        const newAnswers = {};
        shuffled.forEach(([label, text], index) => {
            const newLabel = labelSet[index];
            newAnswers[newLabel] = text;
        });
        const correctText = q.answers[q.correct];
        const newCorrect = Object.keys(newAnswers).find(
            (k) => newAnswers[k] === correctText
        );
        return {
            question: q.question,
            answers: newAnswers,
            correct: newCorrect,
            image: q.image || null,
        };
    });

const form = document.getElementById("quiz-form");

function submitQuiz() {
    let score = 0;

    randomizedQuestions.forEach((q, i) => {
        const radios = document.querySelectorAll(`input[name="q${i}"]`);
        let userAnswer = null;

        radios.forEach((radio) => {
            const label = radio.parentElement;

            // Reset màu
            label.style.color = "black";

            if (radio.checked) {
                userAnswer = radio.value;
                if (radio.value === q.correct) {
                    score++;
                    label.style.color = "green"; // Đúng thì xanh
                } else {
                    label.style.color = "red"; // Sai thì đỏ
                }
            }

            // Hiển thị đáp án đúng (tô xanh nếu chưa chọn đúng)
            if (radio.value === q.correct && radio.value !== userAnswer) {
                label.style.color = "green";
            }

            // Khóa lại không cho đổi sau khi nộp
            radio.disabled = true;
        });
    });

    const percent = (score / randomizedQuestions.length) * 100;
    document.getElementById(
        "result"
    ).innerHTML = `🎯 Kết quả: <strong>${score}/${
        randomizedQuestions.length
    }</strong> (${percent.toFixed(1)}%)`;
}

function startQuiz() {
    document.getElementById("start-screen").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";

    document.getElementById("test-code").textContent = testCode;

    const form = document.getElementById("quiz-form"); // ✅ đảm bảo khai báo đúng form
    form.innerHTML = ""; // ✅ reset nội dung form trước khi thêm câu hỏi mới

    randomizedQuestions.forEach((q, index) => {
        const div = document.createElement("div");
        div.classList.add("question");

        let html = `<p><strong>Câu ${index + 1}:</strong> ${q.question}</p>`;

        // ✅ kiểm tra ảnh tồn tại đúng kiểu (không undefined/null)
        if (q.image && typeof q.image === "string") {
            html += `<img src="${q.image}" alt="Hình câu hỏi ${
                index + 1
            }" style="max-width:100%; margin:10px 0;">`;
        }

        // ✅ xử lý đáp án
        for (let k in q.answers) {
            html += `
        <label>
          <input type="radio" name="q${index}" value="${k}">
          ${k}. ${q.answers[k]}
        </label><br>`;
        }

        div.innerHTML = html;
        form.appendChild(div);
    });
}
