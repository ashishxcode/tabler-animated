"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 4l2 1l2 -1"}],["path",{"d":"M12 2v6m1.196 1.186l1.804 1.034"}],["path",{"d":"M17.928 6.268l.134 2.232l1.866 1.232"}],["path",{"d":"M20.66 7l-5.629 3.25l-.031 .75"}],["path",{"d":"M19.928 14.268l-1.015 .67"}],["path",{"d":"M14.212 14.226l-2.171 1.262"}],["path",{"d":"M14 20l-2 -1l-2 1"}],["path",{"d":"M12 22v-6.5l-3 -1.72"}],["path",{"d":"M6.072 17.732l-.134 -2.232l-1.866 -1.232"}],["path",{"d":"M3.34 17l5.629 -3.25l-.01 -3.458"}],["path",{"d":"M4.072 9.732l1.866 -1.232l.134 -2.232"}],["path",{"d":"M3.34 7l5.629 3.25l.802 -.466"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[12],"o":[12,12],"dl":0.25},{"fx":"pop","n":[4,5],"o":[15.98,14.86],"a":0.35,"dl":0.2},{"fx":"spin","n":[0,1,2,3,6,7,8,9,10,11],"o":[12,12],"a":60,"sym":true}];

export const SnowflakeOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SnowflakeOffIcon.displayName = "SnowflakeOffIcon";
