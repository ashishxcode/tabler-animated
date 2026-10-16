"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M10 4l2 1l2 -1"}],["path",{"d":"M12 2v6.5l3 1.72"}],["path",{"d":"M17.928 6.268l.134 2.232l1.866 1.232"}],["path",{"d":"M20.66 7l-5.629 3.25l.01 3.458"}],["path",{"d":"M19.928 14.268l-1.866 1.232l-.134 2.232"}],["path",{"d":"M20.66 17l-5.629 -3.25l-2.99 1.738"}],["path",{"d":"M14 20l-2 -1l-2 1"}],["path",{"d":"M12 22v-6.5l-3 -1.72"}],["path",{"d":"M6.072 17.732l-.134 -2.232l-1.866 -1.232"}],["path",{"d":"M3.34 17l5.629 -3.25l-.01 -3.458"}],["path",{"d":"M4.072 9.732l1.866 -1.232l.134 -2.232"}],["path",{"d":"M3.34 7l5.629 3.25l2.99 -1.738"}]];
const rig: Rig[] = [{"fx":"spin","n":[0,1,2,3,4,5,6,7,8,9,10,11],"o":[12,12],"a":60,"sym":true}];

export const SnowflakeIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
SnowflakeIcon.displayName = "SnowflakeIcon";
