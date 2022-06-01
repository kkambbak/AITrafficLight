

async function getIntersection() {
    try {
      const res = await axios.get('/traffics');
      const intersections = res.data;
      console.log(intersections);
      console.log("llll");
      const tbody = document.querySelector('#intersection-list tbody');
      tbody.innerHTML = '';
      intersections.map(function (intersection) {
        const row = document.createElement('tr');
        row.addEventListener('click', () => {
          getVideo(intersection.CRSRD_ID);
        });

        // 로우 셀 추가
        let td = document.createElement('td');
        td.textContent = intersection.CRSRD_ID;
        row.addEventListener('click' ,() => {
            getVideo(intersection.CRSRD_ID);
        })
        row.appendChild(td);
        td = document.createElement('td');
        td.textContent = intersection.CRSRD_NM;
        row.appendChild(td);
        tbody.appendChild(row);
      });
    } catch (err) {
      console.error(err);
    }
  }

  async function getVideo(CRSRD_ID) {
    try {
      const res = await axios.get('/intersections/${CRSRD_ID}');
      const intersections = res.data;
      console.log(video);
    } catch (err) {
      console.error(err);
    }
  }
