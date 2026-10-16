"use client";

import { forwardRef } from "react";
import { AnimatedIconBase, type AnimatedIconHandle, type AnimatedIconProps, type IconNode, type Rig } from "@/lib/animated-icon";

const nodes: IconNode[] = [["path",{"d":"M18.69 12.027l-5.054 -8.437a1.914 1.914 0 0 0 -3.274 0l-8.105 13.535a1.914 1.914 0 0 0 1.636 2.871h8.107"}],["path",{"d":"M16 19h6"}],["path",{"d":"M19 16v6"}]];
const rig: Rig[] = [{"fx":"draw","n":[1,2],"o":[19,19],"dl":0.2,"st":0.08},{"fx":"tilt","n":[0],"o":[10.35,11.33],"a":-8}];

export const TrianglePlus2Icon = forwardRef<AnimatedIconHandle, AnimatedIconProps>((props, ref) => (
  <AnimatedIconBase ref={ref} nodes={nodes} rig={rig} {...props} />
));
TrianglePlus2Icon.displayName = "TrianglePlus2Icon";
