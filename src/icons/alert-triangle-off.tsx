"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M21.998 17.997a1.913 1.913 0 0 0 -.255 -.872l-8.106 -13.534a1.914 1.914 0 0 0 -3.274 0l-1.04 1.736m-1.493 2.493l-5.573 9.304a1.914 1.914 0 0 0 1.636 2.871h16.107"}],["path",{"d":"M12 16h.01"}],["path",{"d":"M3 3l18 18"}],["path",{"d":"M12 7v1"}]];
const rig: Rig[] = [{"fx":"draw","n":[2],"o":[12,12],"dl":0.25},{"fx":"shake","n":[0,1,3],"o":[12,11.33]}];

export const AlertTriangleOffIcon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
AlertTriangleOffIcon.displayName = "AlertTriangleOffIcon";
