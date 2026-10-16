"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M3 10a3 7 0 1 0 6 0a3 7 0 1 0 -6 0"}],["path",{"d":"M21 10c0 -3.866 -1.343 -7 -3 -7"}],["path",{"d":"M6 3h12"}],["path",{"d":"M21 10v10l-3 -1l-3 2l-3 -3l-3 2v-10"}],["path",{"d":"M6 10h.01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,3],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,4],"a":0.24,"dl":0.1,"st":0.07,"os":[[19.5,6.5],[12,3],[6.01,10]]}];

export const ToiletPaperIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
ToiletPaperIcon.displayName = "ToiletPaperIcon";
