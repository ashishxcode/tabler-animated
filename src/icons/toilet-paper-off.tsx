"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4.27 4.28c-.768 1.27 -1.27 3.359 -1.27 5.72c0 3.866 1.343 7 3 7s3 -3.134 3 -7c0 -.34 -.01 -.672 -.03 -1"}],["path",{"d":"M21 10c0 -3.866 -1.343 -7 -3 -7"}],["path",{"d":"M7 3h11"}],["path",{"d":"M21 10v7m-1.513 2.496l-1.487 -.496l-3 2l-3 -3l-3 2v-10"}],["path",{"d":"M6 10h.01"}],["path",{"d":"M3 3l18 18"}]];
const rig: Rig[] = [{"fx":"draw","n":[5],"o":[12,12],"dl":0.25},{"fx":"pop","n":[0,1,2,3,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[6,10.64],[19.5,6.5],[12.5,3],[15,15.5],[6.01,10]]}];

export const ToiletPaperOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ToiletPaperOffIcon.displayName = "ToiletPaperOffIcon";
