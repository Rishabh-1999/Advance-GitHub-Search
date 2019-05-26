var data=[];
	var data1=[];
		var searchinput=document.getElementById('serach-input');
		var searchbtn=document.getElementById('serach-btn');
		var table=document.getElementById('table');
		function search()
		{
			if(searchinput.value=="")
			{
				infofun(0);
				return ;
			}
				var xhr=new XMLHttpRequest();
				xhr.open("GET","https://api.github.com/search/users?q="+searchinput.value,true);
				xhr.onload=function()
				{
					var dataString=xhr.responseText;
					data1=JSON.parse(dataString);
					Object.assign({}, data1)
					console.log(data1);
					table.innerHTML="";
					if(data1.items.length==0)
					{
						infofun(0);
						return ;
					}

					for(var i=0;i<data1.items.length;i++)
						addToDom(data1.items[i]);
						infofun(1);
				}
				xhr.send();
		}
		function infofun(value)
		{
			info.innerHTML="";
			var d1=document.createElement('div');
			document.getElementById('info');
			var s1=document.createElement('strong');
			if(value==1)
			{
				d1.setAttribute("class","alert alert-success");
				s1.innerHTML="Success!";
				d1.appendChild(s1);
				d1.innerHTML=d1.innerHTML+ " Data successful fetched and displayed";
				info.appendChild(d1);
			}
			else
			{
				d1.setAttribute("class","alert alert-danger");
				s1.innerHTML="Failed!";
				d1.appendChild(s1);
				d1.innerHTML=d1.innerHTML+ " No name GitHub User Exists";
				info.appendChild(d1);
			}

		}
		var xhr=new XMLHttpRequest();
		xhr.open("GET","https://api.github.com/users?since=1",true);
		xhr.onload=function()
		{
			var dataString=xhr.responseText;
			data=JSON.parse(dataString);
			console.log(data);
			for(i in data)
			{
				addToDom(data[i]);
			}
		}
	xhr.send();

	function addToDom(obj)
	{				
		var tr1=document.createElement('tr');

		var td0=document.createElement('img');
		td0.setAttribute("src",obj.avatar_url);
		td0.setAttribute("class","img-thumbnail");
		td0.setAttribute("style","width:200px; height:200px;");
		tr1.appendChild(td0);

		var td1=document.createElement('td');
		td1.innerHTML=obj.login;
		tr1.appendChild(td1);

		var td2=document.createElement('td');
		td2.innerHTML=obj.type;
		tr1.appendChild(td2);

		var td3=document.createElement('td');
		var a1=document.createElement('a');
		td3.setAttribute("class", "tda");
		a1.setAttribute("href",obj.html_url);
		a1.innerHTML=obj.html_url;
		td3.append(a1);
		tr1.appendChild(td3);

		var td4=document.createElement('td');;
		var a2=document.createElement('a');
		var btn2=document.createElement('button');
		btn2.innerHTML="Click Here to got to Repo";
		btn2.setAttribute("class", "btn btn-success");
		a2.setAttribute("href",obj.html_url);
		a2.append(btn2);
		td4.append(a2);
		tr1.appendChild(td4);
		table.appendChild(tr1);
	}