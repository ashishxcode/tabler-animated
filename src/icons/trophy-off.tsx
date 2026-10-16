"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M8 21h8"}],["path",{"d":"M12 17v4"}],["path",{"d":"M8 4h9"}],["path",{"d":"M17 4v8c0 .31 -.028 .612 -.082 .905m-1.384 2.632a5 5 0 0 1 -8.534 -3.537v-5"}],["path",{"d":"M3 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M17 9a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[6],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4,5],"o":[12,12.5],"a":0.3,"dl":0.12}];

export const TrophyOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrophyOffIcon.displayName = "TrophyOffIcon";
