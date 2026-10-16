"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 12l16 0"}],["path",{"d":"M4 4l0 .01"}],["path",{"d":"M8 4l0 .01"}],["path",{"d":"M12 4l0 .01"}],["path",{"d":"M16 4l0 .01"}],["path",{"d":"M20 4l0 .01"}],["path",{"d":"M4 8l0 .01"}],["path",{"d":"M12 8l0 .01"}],["path",{"d":"M20 8l0 .01"}],["path",{"d":"M4 16l0 .01"}],["path",{"d":"M12 16l0 .01"}],["path",{"d":"M20 16l0 .01"}],["path",{"d":"M4 20l0 .01"}],["path",{"d":"M8 20l0 .01"}],["path",{"d":"M12 20l0 .01"}],["path",{"d":"M16 20l0 .01"}],["path",{"d":"M20 20l0 .01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0],"o":[12,12],"a":0.06},{"fx":"pop","n":[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16],"a":0.24,"dl":0.1,"st":0.07,"os":[[4,4.01],[8,4.01],[12,4.01],[16,4.01],[20,4.01],[4,8],[12,8],[20,8],[4,16.01],[12,16.01],[20,16.01],[4,20.01],[8,20.01],[12,20.01],[16,20.01],[20,20.01]]}];

export const BorderHorizontalIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BorderHorizontalIcon.displayName = "BorderHorizontalIcon";
