"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 20.777a8.942 8.942 0 0 1 -2.48 -.969"}],["path",{"d":"M14 3.223a9.003 9.003 0 0 1 0 17.554"}],["path",{"d":"M4.579 17.093a8.961 8.961 0 0 1 -1.227 -2.592"}],["path",{"d":"M3.124 10.5c.16 -.95 .468 -1.85 .9 -2.675l.169 -.305"}],["path",{"d":"M6.907 4.579a8.954 8.954 0 0 1 3.093 -1.356"}],["path",{"d":"M12 9v6"}],["path",{"d":"M15 12l-3 3l-3 -3"}]];
const rig: Rig[] = [{"fx":"pop","n":[1],"o":[17.5,12],"a":0.06},{"fx":"pop","n":[0,2,3,4,5,6],"a":0.24,"dl":0.1,"st":0.07,"os":[[8.76,20.29],[3.97,15.8],[3.66,9.01],[8.45,3.9],[12,12],[12,13.5]]}];

export const ProgressDownIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ProgressDownIcon.displayName = "ProgressDownIcon";
