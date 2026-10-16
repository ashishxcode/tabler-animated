"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21 12a9 9 0 1 1 -18 0a9 9 0 0 1 18 0"}],["path",{"d":"M7.02 12h-.01"}],["path",{"d":"M12.02 7h-.01"}],["path",{"d":"M17.02 12h-.01"}],["path",{"d":"M12.02 17h-.01"}],["path",{"d":"M8.483 8.468l-.007 -.007"}],["path",{"d":"M15.554 8.468l-.007 -.007"}],["path",{"d":"M15.554 15.539l-.007 -.007"}],["path",{"d":"M8.483 15.539l-.007 -.007"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7,8],"a":0.24,"dl":0.1,"st":0.07,"os":[[7.02,12],[12.02,7],[17.02,12],[12.02,17],[8.48,8.46],[15.55,8.46],[15.55,15.54],[8.48,15.54]]}];

export const VignetteIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
VignetteIcon.displayName = "VignetteIcon";
