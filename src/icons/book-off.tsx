"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 19a9 9 0 0 1 9 0a9 9 0 0 1 5.899 -1.096"}],["path",{"d":"M3 6a9 9 0 0 1 2.114 -.884m3.8 -.21c1.07 .17 2.116 .534 3.086 1.094a9 9 0 0 1 9 0"}],["path",{"d":"M3 6v13"}],["path",{"d":"M12 6v2m0 4v7"}],["path",{"d":"M21 6v11"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"draw","n":[0,1,2,3,4],"o":[12,11.9],"dl":0.05,"st":0.07}];

export const BookOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BookOffIcon.displayName = "BookOffIcon";
