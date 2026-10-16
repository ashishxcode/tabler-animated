"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M4 4l0 .01"}],["path",{"d":"M8 4l0 .01"}],["path",{"d":"M12 4l0 .01"}],["path",{"d":"M16 4l0 .01"}],["path",{"d":"M20 4l0 .01"}],["path",{"d":"M4 8l0 .01"}],["path",{"d":"M12 8l0 .01"}],["path",{"d":"M20 8l0 .01"}],["path",{"d":"M4 12l0 .01"}],["path",{"d":"M8 12l0 .01"}],["path",{"d":"M12 12l0 .01"}],["path",{"d":"M16 12l0 .01"}],["path",{"d":"M20 12l0 .01"}],["path",{"d":"M4 16l0 .01"}],["path",{"d":"M12 16l0 .01"}],["path",{"d":"M20 16l0 .01"}],["path",{"d":"M4 20l0 .01"}],["path",{"d":"M8 20l0 .01"}],["path",{"d":"M12 20l0 .01"}],["path",{"d":"M16 20l0 .01"}],["path",{"d":"M20 20l0 .01"}]];
const rig: Rig[] = [{"fx":"pop","n":[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],"o":[12,12.01],"a":0.06}];

export const BorderNoneIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
BorderNoneIcon.displayName = "BorderNoneIcon";
