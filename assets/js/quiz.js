const quizData = {
  french: [
    {
      question: "Chiến dịch nào đánh dấu thắng lợi cuối cùng của cuộc kháng chiến chống Pháp?",
      options: ["Chiến dịch Biên Giới", "Chiến dịch Điện Biên Phủ", "Chiến dịch Tây Bắc", "Chiến dịch Thượng Lào"],
      answer: "Chiến dịch Điện Biên Phủ"
    },
    {
      question: "Hiệp định Giơ-ne-vơ được ký kết vào ngày nào?",
      options: ["20/7/1954", "21/7/1954", "22/7/1954", "23/7/1954"],
      answer: "21/7/1954"
    },
    {
      question: "Cuộc kháng chiến chống Pháp kéo dài bao nhiêu năm?",
      options: ["7 năm", "8 năm", "9 năm", "10 năm"],
      answer: "9 năm"
    },
    {
      question: "Chiến dịch Biên Giới diễn ra vào thời gian nào?",
      options: ["9-10/1950", "10-11/1950", "11-12/1950", "12/1950-1/1951"],
      answer: "9-10/1950"
    },
    {
      question: "Ai là Tổng chỉ huy chiến dịch Điện Biên Phủ?",
      options: ["Võ Nguyên Giáp", "Hoàng Văn Thái", "Văn Tiến Dũng", "Nguyễn Chí Thanh"],
      answer: "Võ Nguyên Giáp"
    },
    {
      question: "Chiến dịch Điện Biên Phủ kéo dài trong bao lâu?",
      options: ["54 ngày đêm", "55 ngày đêm", "56 ngày đêm", "57 ngày đêm"],
      answer: "56 ngày đêm"
    },
    {
      question: "Đâu là 'thủ đô kháng chiến' trong thời kỳ chống Pháp?",
      options: ["Tân Trào", "Việt Bắc", "Tuyên Quang", "Thái Nguyên"],
      answer: "Việt Bắc"
    },
    {
      question: "Lời kêu gọi toàn quốc kháng chiến được Chủ tịch Hồ Chí Minh đọc vào ngày nào?",
      options: ["19/12/1946", "20/12/1946", "21/12/1946", "22/12/1946"],
      answer: "19/12/1946"
    },
    {
      question: "Đâu là chiến thắng quan trọng của quân đội ta trong chiến dịch Biên Giới 1950?",
      options: ["Đông Khê", "Thất Khê", "Cao Bằng", "Lạng Sơn"],
      answer: "Đông Khê"
    },
    {
      question: "Ai là Tổng chỉ huy quân đội Pháp tại Điện Biên Phủ?",
      options: ["De Castries", "Navarre", "De Lattre de Tassigny", "Salan"],
      answer: "De Castries"
    }
  ],

  american: [
    {
      question: "Hiệp định Paris được ký kết vào năm nào?",
      options: ["1972", "1973", "1974", "1975"],
      answer: "1973"
    },
    {
      question: "Chiến dịch Hồ Chí Minh diễn ra vào thời gian nào?",
      options: ["Tháng 4-5/1975", "Tháng 3-4/1975", "Tháng 5-6/1975", "Tháng 2-3/1975"],
      answer: "Tháng 4-5/1975"
    },
    {
      question: "Sự kiện nào được coi là bước ngoặt của cuộc kháng chiến chống Mỹ?",
      options: ["Tết Mậu Thân 1968", "Hiệp định Paris 1973", "Chiến dịch Điện Biên Phủ trên không", "Chiến thắng Đường 9 - Nam Lào"],
      answer: "Tết Mậu Thân 1968"
    },
    {
      question: "Ai là Tổng thống Mỹ đầu tiên đưa quân đội Mỹ vào miền Nam Việt Nam?",
      options: ["John F. Kennedy", "Lyndon B. Johnson", "Richard Nixon", "Dwight D. Eisenhower"],
      answer: "John F. Kennedy"
    },
    {
      question: "Đường mòn Hồ Chí Minh được xây dựng từ năm nào?",
      options: ["1959", "1960", "1961", "1962"],
      answer: "1959"
    },
    {
      question: "Chiến thắng 'Điện Biên Phủ trên không' diễn ra vào thời gian nào?",
      options: ["Tháng 12/1972", "Tháng 11/1972", "Tháng 1/1973", "Tháng 10/1972"],
      answer: "Tháng 12/1972"
    },
    {
      question: "Cuộc Tổng tiến công và nổi dậy Tết Mậu Thân diễn ra vào năm nào?",
      options: ["1967", "1968", "1969", "1970"],
      answer: "1968"
    },
    {
      question: "Chiến dịch nào mở đầu cho Cuộc Tổng tiến công và nổi dậy Xuân 1975?",
      options: ["Chiến dịch Tây Nguyên", "Chiến dịch Huế-Đà Nẵng", "Chiến dịch Hồ Chí Minh", "Chiến dịch Quảng Trị"],
      answer: "Chiến dịch Tây Nguyên"
    },
    {
      question: "Hiệp định Paris có mấy bên tham gia ký kết?",
      options: ["2 bên", "3 bên", "4 bên", "5 bên"],
      answer: "4 bên"
    },
    {
      question: "Chiến dịch nào giải phóng hoàn toàn miền Nam?",
      options: ["Chiến dịch Hồ Chí Minh", "Chiến dịch Huế-Đà Nẵng", "Chiến dịch Tây Nguyên", "Chiến dịch Xuân 1975"],
      answer: "Chiến dịch Hồ Chí Minh"
    }
  ],

  battles: [
    {
      question: "Trận Ấp Bắc diễn ra vào năm nào?",
      options: ["1960", "1961", "1962", "1963"],
      answer: "1963"
    },
    {
      question: "Chiến thắng Vạn Tường diễn ra ở tỉnh nào?",
      options: ["Quảng Nam", "Quảng Ngãi", "Bình Định", "Phú Yên"],
      answer: "Quảng Ngãi"
    },
    {
      question: "Chiến dịch Đường 9 - Nam Lào diễn ra vào thời gian nào?",
      options: ["Tháng 2-3/1971", "Tháng 3-4/1971", "Tháng 1-2/1971", "Tháng 4-5/1971"],
      answer: "Tháng 2-3/1971"
    },
    {
      question: "Trận Long Tân diễn ra vào năm nào?",
      options: ["1965", "1966", "1967", "1968"],
      answer: "1966"
    },
    {
      question: "Chiến thắng nào đánh dấu sự thất bại của chiến lược 'Chiến tranh đặc biệt'?",
      options: ["Ấp Bắc", "Bình Giã", "Ba Gia", "Vạn Tường"],
      answer: "Bình Giã"
    },
    {
      question: "Trận Khe Sanh diễn ra trong khoảng thời gian nào?",
      options: ["Tháng 1-7/1968", "Tháng 2-7/1968", "Tháng 3-7/1968", "Tháng 4-7/1968"],
      answer: "Tháng 1-7/1968"
    },
    {
      question: "Chiến dịch phản công Xuân Hè 1972 diễn ra ở những địa bàn nào?",
      options: ["Quảng Trị - Tây Nguyên", "Quảng Trị - Trị Thiên", "Quảng Trị - Nam Bộ", "Quảng Trị - Đông Nam Bộ"],
      answer: "Quảng Trị - Trị Thiên"
    },
    {
      question: "Chiến thắng nào được coi là 'Điện Biên Phủ trên không'?",
      options: ["Hà Nội 1972", "Hải Phòng 1972", "B52 Hà Nội 1972", "Trận không chiến Điện Biên Phủ"],
      answer: "B52 Hà Nội 1972"
    },
    {
      question: "Trận đánh mở màn Tết Mậu Thân 1968 diễn ra ở đâu?",
      options: ["Sài Gòn", "Huế", "Đà Nẵng", "Quảng Trị"],
      answer: "Sài Gòn"
    },
    {
      question: "Chiến dịch nào là đòn quyết định cuối cùng giải phóng miền Nam?",
      options: ["Chiến dịch Hồ Chí Minh", "Chiến dịch Tây Nguyên", "Chiến dịch Huế-Đà Nẵng", "Chiến dịch Xuân 1975"],
      answer: "Chiến dịch Hồ Chí Minh"
    }
  ],

  figures: [
    {
      question: "Ai là người chỉ huy chiến dịch Điện Biên Phủ?",
      options: ["Võ Nguyên Giáp", "Nguyễn Chí Thanh", "Văn Tiến Dũng", "Hoàng Văn Thái"],
      answer: "Võ Nguyên Giáp"
    },
    {
      question: "Ai là Tổng Bí thư đầu tiên của Đảng Cộng sản Việt Nam?",
      options: ["Trần Phú", "Lê Hồng Phong", "Hà Huy Tập", "Nguyễn Văn Cừ"],
      answer: "Trần Phú"
    },
    {
      question: "Chủ tịch Hồ Chí Minh sinh năm nào?",
      options: ["1889", "1890", "1891", "1892"],
      answer: "1890"
    },
    {
      question: "Ai là người lãnh đạo cuộc khởi nghĩa Yên Bái?",
      options: ["Nguyễn Thái Học", "Phó Đức Chính", "Nguyễn Khắc Nhu", "Hoàng Văn Thụ"],
      answer: "Nguyễn Thái Học"
    },
    {
      question: "Võ Nguyên Giáp được phong quân hàm Đại tướng năm nào?",
      options: ["1948", "1949", "1950", "1951"],
      answer: "1948"
    },
    {
      question: "Ai là người sáng lập Mặt trận Việt Minh?",
      options: ["Hồ Chí Minh", "Phạm Văn Đồng", "Võ Nguyên Giáp", "Trường Chinh"],
      answer: "Hồ Chí Minh"
    },
    {
      question: "Tướng Nguyễn Chí Thanh hy sinh năm nào?",
      options: ["1965", "1966", "1967", "1968"],
      answer: "1967"
    },
    {
      question: "Ai là người chỉ huy chiến dịch Hồ Chí Minh lịch sử?",
      options: ["Văn Tiến Dũng", "Võ Nguyên Giáp", "Lê Đức Anh", "Nguyễn Chí Thanh"],
      answer: "Văn Tiến Dũng"
    },
    {
      question: "Phan Bội Châu mất năm nào?",
      options: ["1938", "1939", "1940", "1941"],
      answer: "1940"
    },
    {
      question: "Ai là người khởi xướng phong trào Duy Tân?",
      options: ["Phan Châu Trinh", "Phan Bội Châu", "Huỳnh Thúc Kháng", "Trần Quý Cáp"],
      answer: "Phan Châu Trinh"
    }
  ]
};

class Quiz {
      constructor(category) {
          this.category = category;
          this.questions = quizData[category];
          this.currentQuestion = 0;
          this.score = 0;
          this.userAnswers = new Array(this.questions.length).fill(null);
          this.answeredQuestions = new Set();
          this.startTime = new Date();
          this.timerInterval = setInterval(() => this.updateTimer(), 1000);
  
          this.initializeQuiz();
      }
  
      updateTimer() {
          const currentTime = new Date();
          const timeElapsed = Math.floor((currentTime - this.startTime) / 1000);
          const minutes = Math.floor(timeElapsed / 60);
          const seconds = timeElapsed % 60;
          document.getElementById('timeElapsed').textContent = 
              `Thời gian: ${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
      }
  
      getCategoryTitle() {
          const titles = {
              french: 'Kháng chiến chống Pháp',
              american: 'Kháng chiến chống Mỹ',
              battles: 'Những trận đánh nổi tiếng',
              figures: 'Các nhân vật lịch sử'
          };
          return titles[this.category];
      }
  
      initializeQuiz() {
          document.getElementById('quizTitle').textContent = this.getCategoryTitle();
          this.updateQuestion();
          this.updateProgress();
  
          document.getElementById('prevBtn').addEventListener('click', () => this.previousQuestion());
          document.getElementById('nextBtn').addEventListener('click', () => this.nextQuestion());
          document.getElementById('retryBtn').addEventListener('click', () => this.retry());
          document.getElementById('homeBtn').addEventListener('click', () => this.goHome());
      }
  
      updateQuestion() {
          const question = this.questions[this.currentQuestion];
          document.getElementById('question').textContent = question.question;
  
          const optionsContainer = document.getElementById('options');
          optionsContainer.innerHTML = '';
  
          question.options.forEach((option) => {
              const button = document.createElement('button');
              button.className = 'btn option-btn';
              button.textContent = option;
  
              if (this.answeredQuestions.has(this.currentQuestion)) {
                  button.disabled = true;
                  if (option === question.answer) {
                      button.classList.add('correct');
                  } else if (option === this.userAnswers[this.currentQuestion]) {
                      button.classList.add('incorrect');
                  }
              } else {
                  button.addEventListener('click', () => this.selectAnswer(option));
              }
  
              optionsContainer.appendChild(button);
          });
  
          document.getElementById('prevBtn').disabled = this.currentQuestion === 0;
          document.getElementById('nextBtn').textContent = 
              this.currentQuestion === this.questions.length - 1 ? 'Kết thúc' : 'Tiếp theo';
      }
  
      selectAnswer(selectedOption) {
    if (this.answeredQuestions.has(this.currentQuestion)) return;

    const question = this.questions[this.currentQuestion];
    this.userAnswers[this.currentQuestion] = selectedOption;
    this.answeredQuestions.add(this.currentQuestion);

    const buttons = document.querySelectorAll('.option-btn');
    buttons.forEach(button => {
        button.disabled = true;
        if (button.textContent === question.answer) {
            button.classList.add('correct');
            // Thêm icon check cho đáp án đúng
            button.innerHTML = `${button.textContent} <i class="fas fa-check"></i>`;
        } else if (button.textContent === selectedOption && selectedOption !== question.answer) {
            button.classList.add('incorrect');
            // Thêm icon cross cho đáp án sai
            button.innerHTML = `${button.textContent} <i class="fas fa-times"></i>`;
        }
    });

    if (selectedOption === question.answer) {
        this.score++;
    }

    // Tự động chuyển sang câu hỏi tiếp theo sau khi trả lời
    if (this.currentQuestion < this.questions.length - 1) {
        setTimeout(() => this.nextQuestion(), 1500);
    } else {
        setTimeout(() => this.showResults(), 1500);
    }
}
  
      updateProgress() {
          const progress = ((this.currentQuestion + 1) / this.questions.length) * 100;
          document.getElementById('progressBar').style.width = `${progress}%`;
      }
  
      previousQuestion() {
          if (this.currentQuestion > 0) {
              this.currentQuestion--;
              this.updateQuestion();
              this.updateProgress();
          }
      }
  
      nextQuestion() {
          if (this.currentQuestion < this.questions.length - 1) {
              this.currentQuestion++;
              this.updateQuestion();
              this.updateProgress();
          } else {
              this.showResults();
          }
      }
  
     showResults() {
    clearInterval(this.timerInterval);
    const endTime = new Date();
    const timeSpent = Math.floor((endTime - this.startTime) / 1000);
    const minutes = Math.floor(timeSpent / 60);
    const seconds = timeSpent % 60;

    // Tính toán kết quả
    const totalQuestions = this.questions.length;
    const correctAnswers = this.score;
    const wrongAnswers = totalQuestions - correctAnswers;
    const percentage = Math.round((correctAnswers / totalQuestions) * 100);

    // Ẩn nội dung câu hỏi
    document.getElementById('quizContent').classList.add('d-none');

    // Hiển thị kết quả
    const resultsDiv = document.getElementById('results');
    resultsDiv.classList.remove('d-none');

    // Cập nhật các giá trị
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('wrongAnswers').textContent = wrongAnswers;
    document.getElementById('percentage').textContent = percentage;
    document.getElementById('timeSpent').textContent = 
        `${minutes} phút ${seconds} giây`;
}
      retry() {
          this.currentQuestion = 0;
          this.score = 0;
          this.userAnswers = new Array(this.questions.length).fill(null);
          this.answeredQuestions.clear();
          this.startTime = new Date();
          this.timerInterval = setInterval(() => this.updateTimer(), 1000);
  
          document.getElementById('results').classList.add('d-none');
          document.getElementById('quizContent').classList.remove('d-none');
          this.updateQuestion();
          this.updateProgress();
      }
  
      goHome() {
          clearInterval(this.timerInterval);
          document.getElementById('results').classList.add('d-none');
          document.getElementById('quizContent').classList.add('d-none');
          document.querySelector('.quiz-container .row').classList.remove('d-none');
      }
  }
  
  document.addEventListener('DOMContentLoaded', () => {
      document.querySelectorAll('.quiz-category').forEach(category => {
          category.addEventListener('click', () => {
              const categoryType = category.dataset.category;
              document.querySelector('.quiz-container .row').classList.add('d-none');
              document.getElementById('quizContent').classList.remove('d-none');
              new Quiz(categoryType);
          });
      });
  });